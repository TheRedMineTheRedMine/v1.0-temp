import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import wikijapLogo from '../images/wikijap_logo.png';

const Navbar = () => {
    const classes = (
        makeStyles(() => ({
            appBar: {
                borderRadius: 15,
                margin: '30px 0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px 30px',
            },

            heading: {
                color: '#467',
                textDecoration: 'none',
            },

            image: {
                marginRight: '15px',
            },

            brandContainer: {
                display: 'flex',
                alignItems: 'center',
            }
        }))
    )();
    
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <img className={classes.image} src={wikijapLogo} alt="Icon" height="60" />

                <Typography component={Link} to="/home" className={classes.heading} variant="h3" align="center">
                    Wikijap
                </Typography>
            </div>
        </AppBar>
    );
};
export default Navbar;
