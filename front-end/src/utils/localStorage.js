export const saveUser = (data) => {
  const user = JSON.stringify(data);

  localStorage.setItem("user", user);
};
