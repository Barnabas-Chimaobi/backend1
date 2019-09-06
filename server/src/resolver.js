const mongoose = require("mongoose");
const Author = require("./model/user/authors.schema");
const Post = require("./model/user/post/post.schema");
const { AuthenticationError } = require("apollo-server");

const resolvers = {
  Mutation: {
    addAuthor: async (parent, { data }, context, info) => {
      const foundAuthor = await Author.findOne({ email: data.email });

      if (foundAuthor)
        throw new AuthenticationError(
          "A user with the given email already exits..."
        );

      return await Author.create(data);
    },

    addPost: async (_, { data }, context, info) => {
      if (!data) throw new Error("data is not provided...");
      const author = await Author.findOne({ _id: data.authorId });

      data.author = data.authorId;

      const post = await Post.create(data);

      author.posts.push(post);
      await author.save();

      return post;
    },

    updatePost: async (_, { data }, context, info) => {
      const foundPost = await Post.findOne({ _id: data.id });
      if (foundPost.author.equals(data.authorId)) {
        const updateData = {
          title: data.title,
          body: data.body,
          isPublished: data.isPublished
        };
        const updatedPost = await Post.updateOne({ _id: data.id }, updateData, {
          new: true
        });
        // return await updatedPost.findOne({ data });
      }

      throw new AuthenticationError("pls this post is not yours");
    }

    // updateAuthor: async (_, { data }, context, info) => {
    //   const authorUpdate = await Author.findOne({ _id: data.Id });
    //   const author = await Author.update(data);
    //   authorUpdate.push(author);
    //   return author;
    // },

    // deletePost: async (_, { data }, context, info) => {
    //   const postDelete = await Post.findOne({ _Id: data.Id });
    //   if (postDelete) return await "post has been deleted successfully";
    // }
  },

  Query: {
    getAuthors: async (parent, args, context, info) => {
      return await Author.find({});
    },

    getAuthor: async (parent, { id }, context, info) => {
      const foundUser = await Author.findById(id);

      if (!foundUser) throw new Error("user with ID does not exist");

      return foundUser;
    },

    getAllPosts: async (_, args, context, info) => {
      return await Post.find({}).populate({
        path: "author",
        model: "Author"
      });
    },

    getPost: async (_, { id }, context, info) => {
      return await Post.findOne({ _id: id }).populate({
        path: "author",
        model: "Author"
      });
    }
  }
};

module.exports = resolvers;
