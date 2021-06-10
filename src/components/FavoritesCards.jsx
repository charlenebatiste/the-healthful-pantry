import React from 'react';
import { makeStyles, Paper, Grid } from '@material-ui/core';
import Card from '../components/Card';
import "./css/FavoritesCards.css";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(7),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    //   margin: theme.spacing(1, 'auto'),
    },
  }));
  
  export default function FavoritesCards() {
    const classes = useStyles();
      
  
    function FormRow() {
      return (   
        <React.Fragment>
          <Grid item xs={4}>
            <Paper className={classes.paper}><Card/></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}><Card/></Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}><Card/></Paper>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    );
  }