import axios from 'axios';

const KEY = 'AIzaSyBcP485xvFsEl581fukuYSqeekxkAt3HMc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
