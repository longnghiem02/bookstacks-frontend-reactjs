import axios from '../config/axios';

const getAllGenreService = () => {
  return axios.get('/api/get-all-genre');
}

const getAllKindService = () => {
  return axios.get('/api/get-all-kind');
}

const getAllCodeService = (type) => {
  return axios.get(`/api/get-all-code?type=${type}`);
}

const getAllBookService = () => {
  return axios.get('/api/get-all-book');
}

const getAllBookInfoByIdService = (bookId) => {
  return axios.get(`/api/get-all-book-info-by-id?id=${bookId}`);
}

export {
  getAllGenreService,
  getAllKindService,
  getAllCodeService,
  getAllBookService,
  getAllBookInfoByIdService
}