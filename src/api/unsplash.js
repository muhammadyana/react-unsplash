import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 18d9b38dfc933f822475f0400313a6e45dc5b2197f8fcaa641ce049411329012'
  }
});
