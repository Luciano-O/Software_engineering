import React from "react";
import Head from "next/head";
import Login from "./login/login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatbot</title>
      </Head>
      <Login />
    </>
  );
}
