export const apiURL =
  process.env.NODE_ENV === 'production'
    ? 'https://stark-earth-69153.herokuapp.com/api'
    : 'http://localhost:8000/api';
