import axios from 'axios';

import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL || 'http://10.0.1.1:3333',
});

export default api;
