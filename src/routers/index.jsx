import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages";
import About from "../pages/About";
import RootLayout from "../layouts/rootLayout";
import Blogs from "../pages/blogs";
import Post from "../pages/blogs/_id";
import { postById, posts } from "../apis/loader";
import ErrorPages from "../components/ErrorPages";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <HomePages />,
      },
      {
        path: "/blog",
        element: <Blogs />,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <Post />,
        loader: postById,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
