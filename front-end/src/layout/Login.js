import React, { Component, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: "200px",
    },
});


export default () => {
    const classes = useStyles();
    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Name
        </Typography>
                <Typography variant="h5" component="h2">

                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Email
        </Typography>
                <Typography variant="body2" component="p">
                    Password
          <br />
                    {'This is test'}
                </Typography>
            </CardContent>
        </Card>
    );
};

