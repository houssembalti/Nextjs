import { useState } from "react";
import classes from "./newPost.module.css";
import { PostProps } from "../components/Post";
import Modal from "../components/Modal";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
const NewPost = (props: { onAddPost: (post: PostProps) => void }) => {
  const [enteredPOst, setenteredPost] = useState<{
    author: string;
    body: string;
  }>({ body: "", author: "" });
  const navigate = useNavigate();

  return (
    <>
      <Modal>
        <Form className={classes.form} method="post">
          <p>
            <label htmlFor="name" className={classes.label}>
              Name
            </label>
            <input type="text" name="author" id="name" required />
          </p>
          <p>
            <label htmlFor="body" className={classes.label}>
              Text
            </label>
            <textarea name="body" id="body" required rows={3} />
          </p>
          <p>
            <button type="submit" className={classes.button}>
              Submit{" "}
            </button>
            <Link to="/" className={classes.button}>
              Cancel
            </Link>
          </p>
        </Form>
      </Modal>
    </>
  );
};

export default NewPost;

export async function action({ request }: { request: any }) {
  const formdata = await request.formData();
  const postdata = Object.fromEntries(formdata.entries());
  console.log(postdata);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  return redirect("/");
}
