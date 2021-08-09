import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import Chart from './Chart'
import Chart2 from './Chart2'
import './Payment.css'
import { Table } from '../../elements'
import { Bar, Pie } from 'react-chartjs-2';

const datas = {
  labels: ['Total', 'Tax',],
  datasets: [
    {
      label: '# of Votes',
      data: [10,90],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Total $',
      data: [12, 19, 20, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Earning',
      data: [2, 3, 17, 3, 1, 2],
      backgroundColor: 'rgb(54, 162, 235)',
    },
   
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '87%',
    marginLeft: 10,
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
            <Pie data={datas} />
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
            <Pie data={datas} />
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
            <Pie data={datas} />
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
            <Pie data={datas} />
            </div>
          </Paper>
        </Grid>
      </Grid>
      <div style={{marginTop:20}}/>
      <Grid container xs={12} spacing={2} >
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant="h4" >
                  Earning in week
                </Typography>
                  <div style={{height:10}}/>
            <Bar data={data} options={options} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: 20, fontWeight: 600 }}>Total sales</p>
         

            <div className='pro-scroll' style={{ height: 360, overflowY: 'scroll' }} >
              <Table />
            </div>
          </Paper>
        </Grid>
      </Grid>

    </div>
  );
}