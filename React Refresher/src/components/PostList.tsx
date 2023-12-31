/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Post, { PostProps } from "./Post";
import classes from "./PostList.module.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";
/* interface PostListProps {
  isvisible: boolean;
  onStopPosting: () => void;
} */

const PostList = () => {
  const [posts, setposts] = useState<PostProps[]>(
    useLoaderData() as PostProps[]
  );
  const [IsFetching, setIsFetching] = useState<boolean>(false);

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post: PostProps, index: number) => {
            return <Post author={post.author} body={post.body} key={index} />;
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts yet!</h2>
          <p>start adding some !</p>
        </div>
      )}
    </>
  );
};

export default PostList;
