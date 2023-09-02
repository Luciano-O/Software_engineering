import axios from "axios";
const url = process.env.NEXT_PUBLIC_API_URL;

export const login = async (data) => {
  try {
    const result = await axios({
      method: "POST",
      data,
      url: `${url}/login`,
    });

    return result.data;
  } catch (e) {
    return e.response;
  }
};

export const register = async (data) => {
  try {
    const result = await axios({
      method: "POST",
      data,
      url: `${url}/register`,
    });

    return result.data;
  } catch (e) {
    return e.response;
  }
};
