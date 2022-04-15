import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { Button, Grid, Paper, Typography } from '@material-ui/core';

import { createArticle } from '../../actions/article';

import Input from './Input';

import useStyles from './styles';

const Form = () => {
    const [articleData, setArticleData] = useState({
        title: '',
        originalTitle: '',
        author: '',
        type: '',
        gendersAssociated: [''],
        age: '',
        tradBy: [''],
        editVO: '',
        editVF: '',
        nVol: '',
        price: '',
        content: '',
        image: '',
    });

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createArticle(articleData));
    };
    
    return (
        <Grid item xs={true} sm={8}>
            <Paper className={classes.root}>
                <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Typography variant="h6">Create article</Typography>

                    <Grid className={classes.form} container spacing={2}>
                        <Input
                            name="title"
                            label="Titre" 
                            handleChange={(e) => setArticleData({ ...articleData, title: e.target.value })}
                        />

                        <Input
                            name="originalTitle"
                            label="Titre Original" 
                            handleChange={(e) => setArticleData({ ...articleData, originalTitle: e.target.value })}
                        />

                        <Input
                            name="author"
                            label="Auteur(s)" 
                            handleChange={(e) => setArticleData({ ...articleData, author: e.target.value })}
                        />

                        <Input
                            name="type"
                            label="Type" 
                            handleChange={(e) => setArticleData({ ...articleData, type: e.target.value })}
                        />

                        <Input
                            name="tags"
                            label="Tags"
                            handleChange={(e) => setArticleData({ ...articleData, tags: e.target.value.split(',') })}
                        />

                        <Input
                            name="age"
                            label="Age conseillé" 
                            handleChange={(e) => setArticleData({ ...articleData, age: e.target.value })}
                        />

                        <Input
                            name="tradBy"
                            label="Traduit par" 
                            handleChange={(e) => setArticleData({ ...articleData, tradBy: e.target.value.split(',') })}
                        />

                        <Input
                            name="gendersAssociated"
                            label="Genres associés" 
                            handleChange={(e) => setArticleData({ ...articleData, gendersAssociated: e.target.value.split(',') })}
                        />

                        <Input
                            name="editVO"
                            label="Editeur VO" 
                            handleChange={(e) => setArticleData({ ...articleData, editVO: e.target.value })}
                        />

                        <Input
                            name="editVF"
                            label="Editeur VF" 
                            handleChange={(e) => setArticleData({ ...articleData, editVF: e.target.value })}
                        />

                        <Input
                            name="nVol"
                            label="Nombre de volumes" 
                            handleChange={(e) => setArticleData({ ...articleData, nVol: e.target.value })}
                        />

                        <Input
                            name="price"
                            label="Prix" 
                            handleChange={(e) => setArticleData({ ...articleData, price: e.target.value })}
                        />

                        <Input
                            name="content"
                            label="Contenu de l'article" 
                            handleChange={(e) => setArticleData({ ...articleData, content: e.target.value })}
                            fullWidth
                        />

                        <div className={classes.fileInput}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({base64}) => setArticleData({ ...articleData, image: base64 })}
                            />
                        </div>
                    </Grid>

                    <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" fullWidth>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default Form;
