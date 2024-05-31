import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '42275812-94ae38888942c55c0a8530194',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (searchQuery, page) => {
  const { data } = await axios.get(`?q=${searchQuery}&page=${page}`);
  return data;
};
