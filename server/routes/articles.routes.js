import { Router } from 'express';
import { createArticle, getArticle, getArticles } from '../controllers/articles.js';

const ArticlesRoutes = Router();

ArticlesRoutes.get('/', getArticles);
ArticlesRoutes.get('/:id', getArticle);

ArticlesRoutes.post('/new', createArticle);

ArticlesRoutes.patch('/:id');

ArticlesRoutes.delete('/:id');

export default ArticlesRoutes;
