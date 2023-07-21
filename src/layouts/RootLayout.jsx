import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";
const RootLayout = () => {
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        to="/"
      >
        Home
      </NavLink>{" "}
      |
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        to="/blog"
      >
        Blogs
      </NavLink>{" "}
      |{" "}
      <NavLink
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
        to="/about"
      >
        About
      </NavLink>
      <p />
      <Outlet />
    </>
  );
};

export default RootLayout;
