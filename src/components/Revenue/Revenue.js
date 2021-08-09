import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './Revenue.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width:'87%',
    marginLeft:10,
    
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: 20,
    color: theme.palette.text.secondary,
   
  },
 
}));
export default function Revenue() {
  const classes = useStyles();
  return (
    <div className='re-container'>
      <Grid xs={12}>
        <Paper className={classes.paper}>
          <p style={{fontSize:20,fontWeight:600}}>Total sales</p>
        
        </Paper>
      </Grid>
    </div>
  )
}
