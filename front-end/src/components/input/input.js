import React from "react";
import styles from "./input.module.scss";

export default function Input(props) {
  const { type, placeholder, value, callback } = props;
  return (
    <input
      type={type}
      className={styles.login_input}
      placeholder={placeholder}
      value={value}
      onChange={callback}
    />
  );
}
