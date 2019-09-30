import React, { useReducer } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_NEW_POST } from "./queries";

const AddPost = () => {
  const [postState, setPostState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      body: ""
    }
  );
  const [addPost] = useMutation(ADD_NEW_POST);

  const handleChange = e => {
    setPostState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (postState.title && postState.body) {
      console.log(postState, postState.body);
      addPost({
        variables: {
          ...postState,
          authorId: "5d8e7438251a070b65380291",
          isPublished: true
        }
      });
      setPostState({ title: "", body: "" });
    } else alert("please provide a data");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={postState.title}
          name="title"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          value={postState.body}
          name="body"
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
