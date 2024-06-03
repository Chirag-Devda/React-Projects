const USER_URL = "/user";
import Axios from "../Axios";

export const signinuser = async ({ email, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signin`, {
      email,
      password,
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
export const VerifyEmailAddressSignup = async ({ token }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verfiy-user-mail`, {
      token,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
export const sendForgotmail = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/forgot-password`, {
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
export const verfiyForgottokensend = async ({ token, password }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verify-forgot-mail`, {
      token,
      password,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
