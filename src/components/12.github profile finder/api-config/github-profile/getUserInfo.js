import {masterURL} from "../config";

export const fetchGithubProfile = async (username) => {
  try {
    const response = await fetch(`${masterURL}/${username}`);
    console.log(response);
    if (response.status !== 200) {
      if (response.status === 404) {
        throw new Error("Not found 404");
      } else {
        throw new Error(`Http Error ${response.status}`);
      }
    }
    const userdata = await response.json();
    return userdata;
  } catch (err) {
    if (err.name === "TypeError" && err.message === "Failed to fetch") {
      return "Please check your internet connection..";
    }
    console.log(err, err.message);
    return err.message;
  }
};

export const fetchGithubUsers = async () => {
  try {
    const response = await fetch(`${masterURL}`);
    if (response.status !== 200) {
      if (response.status === 404) {
        throw new Error("Not found 404");
      } else {
        throw new Error(`Http Error ${response.status}`);
      }
    }
    const userdata = await response.json();
    return userdata;
  } catch (err) {
    if (err.name === "TypeError" && err.message === "Failed to fetch") {
      return "Please check your internet connection..";
    }
    console.log(err, err.message);
    return err.message;
  }
};
