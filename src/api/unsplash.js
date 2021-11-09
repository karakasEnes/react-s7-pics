import axios from "axios";

// console.log(process.env.UNSPLASH_KEY);
// console.log(process.env.HELLO);
export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers : {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
      }
})