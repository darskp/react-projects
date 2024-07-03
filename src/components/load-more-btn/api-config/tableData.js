import {masterURL} from "./config";

export const fetchData = async (limit, skip) => {
  try {
    const response = await fetch(
      `${masterURL}?limit=${limit}&skip=${skip}&select=title,price`,
    );
    if (!response.ok) {
      if (response.status == 404) {
        throw new Error("Resource not found 404 ");
      } else {
        throw new Error(`Http Error ${response.status}`);
      }
    }
    const data = await response.json();
    return {products: data.products};
  } catch (err) {
    return {error: err.message};
  }
};
