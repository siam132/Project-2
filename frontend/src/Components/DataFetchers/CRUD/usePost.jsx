import { useEffect, useState } from "react";
import axios from "axios";

const usePost = (url, employee) => {
  const posted = axios
    .post(url, employee)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => console.log(error));
  
  

  return { posted };
};

export default usePost;
