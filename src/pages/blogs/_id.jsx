import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SinglePost = () => {
  const params = useParams();
  const postsById = useLoaderData();

  return (
    <>
      <h2>{postsById?.title}</h2>
      <div>{postsById?.body}</div>
    </>
  );
};

export default SinglePost;
