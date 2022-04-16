import { useEffect, useState } from "react";
import axios from "axios";
const useApplicationData = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=HJ4zD2EehPtMpl8jcMoWBCE3TpJbtdFMhcDgmDml"
      )
      .then((res) => {
        setState(res.data.photos);
      });
  }, []);

  return { state };
};

export default useApplicationData;
