import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getArticle } from '../actions/article';

import '../assets/css/article.css';

const Article = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getArticle(id));
    }, [dispatch]);

    const article = useSelector((state) => state.articles);

    const LineContainer = ({name, content, param = ""}) => (
        <div className={`line ${param}`}>
            <span className="line-title">{name}</span>
            <span className="line-content">{content}</span>
        </div>
    );

    setTimeout(function () {
        const q = document.querySelector('article .content');
        q.innerHTML = q.innerHTML.replaceAll("\\n", "<br><br>");
    }, 100);

    return (
        <>
            <article>
                <div className="title"><h2>{article.title}</h2></div>
                <div className="first-content">
                    <div className="image">
                        <picture>
                            <img src={article.image} />
                        </picture>
                    </div>

                    <div className="table-infos">
                        <div className="first">
                            <div className="infos-title">
                                Infos rapides :
                            </div>
                        </div>

                        <LineContainer name="Titre original" content={article.originalTitle} />
                        <LineContainer name="Auteur" content={article.author} />
                        <LineContainer name="Type" content={article.type} />
                        <LineContainer name="Genres associés" content={article.gendersAssociated?.join(', ')} />
                        <LineContainer name="Âge minimal conseillé" content={article.age} param="age" />
                        <LineContainer name="Traduit par" content={article.tradBy?.join(', ')} />
                        <LineContainer name="Éditeur VO" content={article.editVO} />
                        <LineContainer name="Éditeur VF" content={article.editVF} />
                        <LineContainer name="Nombre de volumes" content={article.nVol} />
                        <LineContainer name="Prix" content={article.price} param="price" />
                    </div>
                </div>

                <div className="content">{article.content}</div>
            </article>
            
            <br />
        </>
    );
};

export default Article;
