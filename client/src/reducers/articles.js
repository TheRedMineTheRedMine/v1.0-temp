const action = (articles = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
        case 'GET_ONCE':
            return action.payload;

        case 'CREATE':
            return [...articles, action.payload];

        default:
            return articles;
    }
};

export default action;
