const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
      trim: true
    },
    // username: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   unique: true
    // },
    body: String,
    isPublished: {
      type: Boolean,
      default: true
    },
    // createdAt: {
    //   type: String,
    //   required: true,
    //   minlength: 4
    // },
    // likes: Number,
    author: {
      type: Schema.Types.ObjectID
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
