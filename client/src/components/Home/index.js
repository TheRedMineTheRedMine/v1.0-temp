import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

import SingleArticle from './SingleArticle';
import { fetchArticles } from '../../actions/article';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    const articles = useSelector(state => state.articles);

    return (
        <Container className={classes.main}>
            <Typography variant="h5" component="h5" className={classes.cateTitle}>Derniers articles parus :</Typography>

            {articles !== [] && articles.map(a => 
                <SingleArticle article={a} />
            )}
        </Container>
    );
};

export default Home;
