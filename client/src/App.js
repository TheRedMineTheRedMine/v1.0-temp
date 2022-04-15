import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Article from './components/Article';
import Home from './components/Home';
import Form from './components/Form';

import Navbar from './components/Navbar';

import Error from './errors';
import Error404 from './errors/404';

// Fonts
import './assets/fonts/index.css';
import './assets/css/style.css';

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar />

            <Routes>
                {/* Home page */}
                <Route exact path="/" element={<Navigate to="/home" />} /> {/* Redirection to home */}
                <Route exact path="/home" element={<Home />} />

                {/* Article page */}
                <Route exact path="/article/:id" element={<Article />} />

                {/* Errors */}
                <Route exact path="/error/:statusCode/:data" element={<Error />} />
                <Route exact path="/404" element={<Error404 />} />
                <Route exact path="*" element={<Navigate to="/404" />} />

                {/* Admin */}
                <Route exact path="/article/create" element={<Form />} />
            </Routes>
        </Container>
    </BrowserRouter>
);

export default App;
