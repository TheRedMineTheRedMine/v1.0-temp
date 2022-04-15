import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import ArticlesRoutes from './routes/articles.routes.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// routes
app.use('/articles', ArticlesRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running at : ' + PORT)))
    .catch((error) => console.log(error.message));
