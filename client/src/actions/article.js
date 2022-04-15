import * as api from '../api';

export const fetchArticles = () => async (dispatch) => {
    try {
        const { data } = await api.fetchArticles();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        window.location = `/error/${error.response.status}/${error.response.data}`;
    }
};

export const getArticle = (id) => async (dispatch) => {
    try {
        const { data } = await api.getArticle(id);

        dispatch({ type: 'GET_ONCE', payload: data });
    } catch (error) {
        window.location = `/error/${error.response.status}/${error.response.data}`;
    }
};

export const createArticle = (newArticle) => async (dispatch) => {
    try {
        const { data } = await api.createArticle(newArticle);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        window.location = `/error/${error.response.status}/${error.response.data}`;
    }
};
