import axios from "axios";

//const URI = "http://localhost:4000/posts";
const URI = `http://${process.env.REACT_APP_SPRING_HOST}:${process.env.REACT_APP_SPRING_PORT}`;

export const lectorePost = async (data: any) => {
    data.rating = parseInt(data.rating);
    const res = await axios.post(URI, data);
    return res.data;
  };
