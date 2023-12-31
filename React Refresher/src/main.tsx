import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { loader as PostsLoader } from "./routes/App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";

const router: any = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: PostsLoader,
        children: [
          {
            path: "/create-post",
            element: (
              <NewPost /* onCancel={() => {}} onAddPost={() => {}}  */ />
            ),
            action: newPostAction,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
