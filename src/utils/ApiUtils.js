import axios from 'axios';

export const getItems = async () => {
  return axios.get(`${process.env.REACT_APP_AWS_BACKEND_URL}/items/`).catch((err) => console.log(err));
};

export const getLeaderboard = async () => {
  return axios.get(`${process.env.REACT_APP_AWS_BACKEND_URL}/leaderboard/`).catch((err) => console.log(err));
};
