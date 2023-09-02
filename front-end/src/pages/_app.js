import React from "react";
import propTypes from "prop-types";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: propTypes.shape({}).isRequired,
  pageProps: propTypes.shape({}).isRequired,
};
