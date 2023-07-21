import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
  const posts = useLoaderData();

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`/blog/${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Blogs;
