import { useState, useEffect } from "react";
import Article from "../components/Article";
import postsData from "../post.json";
import Search from "../components/Search";
const HomePages = () => {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);
  const onSearchChange = (value) => {
    const filterPosts = postsData.filter((item) => item.title.includes(value));
    setPosts(filterPosts);
    setTotalPosts(filterPosts.length);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  useEffect(() => {
    console.log("Ada posts baru!");
  }, [posts]);
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => (
        <Article {...{ title, tags, date, isNew }} key={index} />
      ))}
      <hr />
      {externalPosts.map((item, index) => {
        return <div key={index}>-{item.title}</div>;
      })}
    </>
  );
};

export default HomePages;
