import { useEffect, useState } from "react";
import axios from "axios";

const useApplicationData = () => {
  const { REACT_APP_API_KEY } = process.env;
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(`${REACT_APP_API_KEY}`).then((res) => {
      setState(res.data.photos);
    });
  }, []);

  return { state };
};

export default useApplicationData;
