import Input from "@/components/input/input";
import styles from "./login.module.scss";
import Button from "@/components/button/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { login } from "@/utils/reqs";
import { saveUser } from "@/utils/localStorage";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    const formChange = () => {
      if (email.match(emailRegex) && password.length > 5) setDisabled(false);
      else setDisabled(true);
    };

    formChange();
  }, [password, email]);

  const handleClick = async () => {
    const response = await login({ email, password });

    saveUser(response);

    router.push("/chat");
  };

  return (
    <form className={styles.form}>
      <Input
        type="text"
        placeholder="Email"
        value={email}
        callback={({ target }) => setEmail(target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        callback={({ target }) => setPassword(target.value)}
      />
      <Button content="Log in" onClick={handleClick} disabled={disabled} />
      <p className={styles.message}>
        Don't have an account ? <Link href="/register">Register</Link>
      </p>
    </form>
  );
}
