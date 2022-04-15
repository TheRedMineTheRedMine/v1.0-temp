import axios from 'axios';

const API = axios.create({ baseURL: "http://192.168.1.27:5000" });

// Articles
export const fetchArticles = () => API.get('/articles');
export const getArticle = (id) => API.get(`/articles/${id}`);

export const createArticle = (newArticle) => API.post('/articles/new', newArticle);
