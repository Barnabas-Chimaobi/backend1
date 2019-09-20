import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_AUTHORS } from "./queries";
// import { gql } from "apollo-boost";

function GETAUTHORS() {
  const { loading, error, data } = useQuery(GET_ALL_AUTHORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { getAuthors: Authors } = data;

  const renderAuthors = () => {
    return Authors.length > 0
      ? Authors.map((author, idx, ids) => (
          <div>
            <h2 key={idx}>{author.email}</h2>,<h1>{author.username}</h1>
          </div>
        ))
      : NoAuthor;
  };

  const NoAuthor = (
    <div>
      <p>you have no author yet</p>
    </div>
  );

  console.log(renderAuthors);

  return (
    <div>
      <p>All Authors</p>
      {renderAuthors()}
    </div>
  );
}

export default GETAUTHORS;
