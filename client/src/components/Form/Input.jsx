import React from 'react';
import { Grid, TextField } from '@material-ui/core';

import useStyles from './styles';

const Input = ({ label, name, handleChange, fullWidth }) => {
    const style = useStyles();
    const fW = fullWidth !== undefined;

    return (
        <Grid item xs={12} sm={fW ? 11 : 6}>
            <TextField
                className={style.input}
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                type="text"
                label={label}
                fullWidth={fW}
            />
        </Grid>
    );
};

export default Input;
