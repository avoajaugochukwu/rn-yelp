import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term) => {
    setResult((prevState) => ({ ...prevState, loading: true }));

    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 15,
          term,
          location: "Toronto",
        },
      });

      setResult((prevState) => ({
        ...prevState,
        loading: false,
        data: response.data.businesses,
      }));
    } catch (error) {
      setResult((prevState) => ({
        ...prevState,
        loading: false,
        error: "Something went wrong",
      }));
    }
  };

  return [results, searchRestaurants];
};
