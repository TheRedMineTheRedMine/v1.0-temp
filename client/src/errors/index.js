import React from 'react';
import { useParams } from 'react-router-dom';

const ErrorHandler = () => {
    const { statusCode, data } = useParams();

    return (
        <p>Error {statusCode} : {data}</p>
    );
};

export default ErrorHandler;