import React from "react";
import styles from "./button.module.scss";

export default function Button(props) {
  const { content, onClick, disabled } = props;
  return (
    <button
      type="button"
      className={styles.login_button}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
