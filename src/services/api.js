import axios from 'axios';

const API_URL = 'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow';

const fetchTags = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

export default fetchTags;
