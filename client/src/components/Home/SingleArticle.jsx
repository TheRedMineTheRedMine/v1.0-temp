import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const SingleArticle = ({ article }) => {
    const style = useStyles();

    return (
        <Link className={style.article} to={`/article/${article._id}`}>
            <div className={style.icon}>
                <img className={style.imageIcon} src={article.image} alt={article.title} />
            </div>

            <div className={style.content}>
                <div className={style.titleContent}>
                    <Typography variant="h5" component="h4">{article.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{article.author}, {article.type}</Typography>
                </div>

                <Typography className={style.articleContent} variant="body1" component="p">
                    {article.content.substring(0, 50)}...
                </Typography>
            </div>
        </Link>
    );
};

export default SingleArticle;