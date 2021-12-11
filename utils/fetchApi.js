import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";
//  headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': 'c819ab4ed8mshd9b9217495b76e8p1391c0jsnaa6a69aee87e'
//   }
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "c819ab4ed8mshd9b9217495b76e8p1391c0jsnaa6a69aee87e",
    },
  });
  return data;
};
