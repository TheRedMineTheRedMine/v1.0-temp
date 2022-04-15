import mongoose from 'mongoose';
import ArticleContent from '../models/articlesContent.js';

export const getArticles = async (req, res) => {
    try {
        const articleContent = await ArticleContent.find();

        res.status(200).json(articleContent);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const getArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json('No article with that id.');

    const article = await ArticleContent.findById(id);

    res.status(200).json(article);
};

export const createArticle = async (req, res) => {
    console.log(req);
    const article = req.body;
    const newArticle = new ArticleContent({ ...article, createdAt: new Date().toISOString() });

    try {
        await newArticle.save();

        res.status(201).json(newArticle);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error });
    }
};
