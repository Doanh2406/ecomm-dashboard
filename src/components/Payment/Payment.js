import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import Chart from './Chart'
import Chart2 from './Chart2'
import './Payment.css'
import {Table} from '../../elements'



const useStyles = makeStyles((theme) => ({
  root: {
    width:'87%',
    marginLeft:10,
    marginTop: 20,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   
  },
 
}));

export default function Payment() {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className='pa-card-row'>
              <div className='pa-card'>
                <Typography variant="h6" >
                  $2,156
                </Typography>
                <Typography variant="subtitle1" >
                  Total Tax
                </Typography>
              </div>

              <TimelineOutlinedIcon style={{ marginLeft: 'auto', color: '#fff', fontSize: 40 }} />
            </div>
            <div style={{ width: '100%', alignItems: 'center', justifyItems: 'center' }}>
              <Chart />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className='pa-card-row'>
              <div className='pa-card'>
                <Typography variant="h6" >
                  $2,156
                </Typography>
                <Typography variant="subtitle1" >
                  Total Cost
                </Typography>
              </div>

              <TimelineOutlinedIcon style={{ marginLeft: 'auto', color: '#fff', fontSize: 40 }} />
            </div>
            <div style={{ width: '100%', alignItems: 'center', justifyItems: 'center' }}>
              <Chart />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className='pa-card-row'>
              <div className='pa-card'>
                <Typography variant="h6" >
                  $2,156
                </Typography>
                <Typography variant="subtitle1" >
                  Total Sales
                </Typography>
              </div>

              <TimelineOutlinedIcon style={{ marginLeft: 'auto', color: '#fff', fontSize: 40 }} />
            </div>
            <div style={{ width: '100%', alignItems: 'center', justifyItems: 'center' }}>
              <Chart />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <div className='pa-card-row'>
              <div className='pa-card'>
                <Typography variant="h6" >
                  $2,156
                </Typography>
                <Typography variant="subtitle1" >
                  Total Earning
                </Typography>
              </div>

              <TimelineOutlinedIcon style={{ marginLeft: 'auto', color: '#fff', fontSize: 40 }} />
            </div>
            <div style={{ width: '100%', alignItems: 'center', justifyItems: 'center' }}>
              <Chart />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <Chart2 />
      </Grid>
      <div style={{height:20}} />
      <Grid xs={12}>
        <Paper className={classes.paper}>
          <p style={{fontSize:20,fontWeight:600}}>Total sales</p>
        <div className='pro-scroll' style={{ height: '200px', overflowY: 'scroll' }} >
            <Table />
          </div>
        </Paper>
      </Grid>
    </div>
  );
}