"use client";
import React from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <main className="error">
      <h1>an Error has occured !</h1>
      <p>faield to fetch meals , please try again later !</p>
    </main>
  );
};

export default ErrorPage;
