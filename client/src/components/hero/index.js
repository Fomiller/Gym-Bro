import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: 400,
    backgroundColor:'Aliceblue'
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.hero}/>
  );
};