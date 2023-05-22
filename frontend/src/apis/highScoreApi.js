import axios from "axios";
const URL = '/api/highscore';

const highscoreApi = {
  getLeaderboard(name = '') {
    return axios.get(`${URL}/leaderboard`, { params: { name } });
  }
};

export default highscoreApi;
