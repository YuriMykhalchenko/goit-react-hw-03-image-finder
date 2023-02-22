import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33555554-ba95f1a19bfd971ca871b6e57';

const getImages = async (value, page = 1, perPage = 12) => {
  const options = {
    params: {
      q: value,
      page: page,
      per_page: perPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      key: KEY,
    },
  };

  const { data, status } = await axios.get(`${BASE_URL}`, options);

  if (status !== 200 || data.totalHits === 0) {
    // return Promise.reject(
    throw new Error(
      toast.error(`Sorry, there are no images "${value}". Please try again.`)
    );
    // );
  } else return data;
};

export const API = {
  getImages,
};
