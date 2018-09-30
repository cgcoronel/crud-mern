import axios from 'axios';

export const URL =  `http://localhost:3678/api/`;

export default axios.create({
  baseURL: URL
});
