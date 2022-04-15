import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    main: {
        fontFamily: 'sans-serif',
        marginBottom: 16,
    },

    cateTitle: {
        fontSize: "1.6rem",
    },

    article: {
        display: "flex",
        flexFlow: 'row nowrap',
        alignItems: "center",
        border: '1px solid var(--grey-4)',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
        marginTop: 16,
        textDecoration: 'none',
        width: "100%",
        maxWidth: 400,
        minHeight: 150,
    },

    icon: {
        display: "block",
        height: "100%",
        minWidth: 80,
        maxWidth: 90,
        overflow: 'hidden',
    },

    imageIcon: {
        width: "100%",
        objectFit: 'cover',
    },

    content: {
        display: 'flex',
        flexFlow: "column nowrap",
        justifyContent: "space-evenly",
        color: 'var(--black)',
        paddingLeft: 10,
        minHeight: 140,
        height: "100%",
    },

    articleContent: {
        color: 'var(--black-1)',
        marginTop: 2,
    },
}));
