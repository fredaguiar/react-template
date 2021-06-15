import axios from 'axios';
import config from '../config';

export const multiply = async (x, y) => {
  const { baseUrl, endpoint } = config.multiplyApi;
  // const response = await axios.post(`${baseUrl}${endpoint}`, { x, y });
  // simulate API request
  const result = await Promise.resolve(x*y);

  return {result: result};
};

const mathServices = {
  multiply,
};

export default mathServices;
