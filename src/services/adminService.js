import axios from '../config/axios';

const addNewBookService = (data) => {
  return axios.post('/api/add-new-book', data);
}

const updateBookInfoService = (data) => {
  return axios.put('/api/update-book-info', data);
}

const deleteBookService = (bookId) => {
  return axios.delete('/api/delete-book', {data: {id: bookId}});
}

const addNewChapterService = (data) => {
  return axios.post('/api/add-new-chapter', data);
}

const updateChapterInfoService = (data) => {
  return axios.put('/api/update-chapter-info', data);
}

const deleteChapterService = (chapterId) => {
  return axios.delete('/api/delete-chapter', {data: {id: chapterId}});
}

export {
  addNewBookService,
  updateBookInfoService,
  deleteBookService,
  addNewChapterService,
  updateChapterInfoService,
  deleteChapterService
}