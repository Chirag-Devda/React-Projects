let USER_URL = "/user";
import Axios from "../Axios";

export const signinuser = async ({ password, email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signin`, {
      password,
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
export const signupuser = async ({ password, email, lastName, firstName }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signup`, {
      password,
      email,
      lastName,
      firstName,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
export const sendverificationmail = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/send-verification-mail`, {
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
