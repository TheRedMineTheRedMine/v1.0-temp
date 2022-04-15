import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
    title: String,
    originalTitle: String,
    author: String,
    type: String,
    gendersAssociated: [String],
    age: String,
    tradBy: [String],
    editVO: String,
    editVF: String,
    nVol: String,
    price: String,
    content: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

var ArticleContent = mongoose.model('articles', articleSchema);

export default ArticleContent;
