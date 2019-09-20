const postResolver = {
  postMutation: {
    addPost: async (_, { data }, { datasource: { Post } }) => {
      return await new Post().addPost(data);
    },

    updatePost: async (_, { data }, { datasource: { Post } }) => {
      return await new Post().updatePost(data);
    },

    deletePost: async (_, { data }, { datasource: { Post } }) => {
      return await new Post().deletePost(data);
    }
  },

  postQuery: {
    getAllPosts: async (_, args, { datasource: { Post } }) => {
      return await new Post().getAllPosts();
    },

    getPost: async (_, { id }, { datasource: { Post } }) => {
      return await new Post().getPost(id);
    }
  }
};

module.exports = postResolver;
