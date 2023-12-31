import { useState } from "react";
import "../App.css";

import PostList from "../components/PostList";
import MainHeader from "../components/ModalHeader";
import { Outlet } from "react-router-dom";
import { PostProps } from "../components/Post";

function App() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;

export async function loader() {
  const   posts: PostProps[] = await fetch("http://localhost:8080/posts").then(
    (res) =>
      res.json().then((data) => {
        console.log(data.posts);
        return data.posts;
      })
  );
  return posts;
}
