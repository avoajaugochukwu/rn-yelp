import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState({
    data: {},
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id) => {
    setResult((prevState) => ({ ...prevState, loading: true }));

    try {
      const response = await yelp.get(`/${id}`);

      setResult((prevState) => ({
        ...prevState,
        loading: false,
        data: response.data,
      }));
    } catch (error) {
      setResult((prevState) => ({
        ...prevState,
        loading: false,
        error: "Something went wrong",
      }));
    }
  };

  return [result, searchRestaurant];
};
