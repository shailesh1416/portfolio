import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  const changeState=(newData)=>{
    setData(newData)  
  }

  return [data,changeState];
};

export default useFetch;