import axios from "axios";
import { Member } from "./Member";
const BASE_URL = `http://localhost:${process.env.REACT_APP_SPRING_PORT}`;

export const memberPost = async (data: any) => {
  const URL = `${BASE_URL}/user/add`;
  console.log("URL:", URL);
  const res = await axios.post(URL,{"body": data},{
    headers: {
      'Content-Type':'application/json'
    },
  });
  return res.data;
};
