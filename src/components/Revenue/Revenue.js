import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

import './Revenue.scss'

const data = {
  labels: ['SunDay', 'MonDay', 'ThusDay', 'Wenesday', 'namday', 'Friday', 'Satuday'],
  datasets: [
    {
      label: 'Visited',
      data: [100, 180, 150, 200, 250, 300, 270],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Sales',
      data: [90, 110, 75, 90, 100, 150, 200],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-1',
    },
  ],
};
const datas = {
  labels: ['Chrome', 'Edge', 'Safari', 'Frifox', 'Opera', 'Others'],
  datasets: [
    {
      label: 'Total count  ',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],

      borderWidth: 1,
    },
  ],
};
const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: false,
      text: 'User\'s web browser',
    },
  },
};

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: 20,
    color: theme.palette.text.secondary,
    marginRight: 20
  },

}));
export default function Revenue() {
  const classes = useStyles();
  return (
    <div className='re-container'>

      <Paper className={classes.paper}>
        <div className='re-chart' >
          <div className='re-chart-active' style={{ width: '50%' }}>
            <p >50% buy</p>
          </div>

          <div className='re-chart-unactive' style={{ width: '50%' }}>
            <p >50% not buy</p>
          </div>
        </div>
        <div className='re-chart-title'>
          <p style={{ fontSize: 20, fontWeight: 600 }}>Total visit and buy in <Cs /> </p>
        </div>
      </Paper>
      <Grid container xs={12} spacing={0}>

        <Grid item xs={6}>

          <Paper className={classes.paper}>
            <Typography variant="h4">User visit and sale in last week</Typography>
            <Line data={data} />
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h4">Web browser</Typography>

            <Bar data={datas} options={options} />
          </Paper>
         
        </Grid>


        <Grid item xs={6}>

        <Paper className={classes.paper}>
            <Typography variant="h4">User's Location</Typography>

            <Bar data={datas} />
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h4">Catagories User visited</Typography>

            <Doughnut data={datas} />
          </Paper>
        </Grid>
      </Grid>

    </div>
  )
}


const Cs = () => {
  return (
    <select className='pro-select' id='date' name='date'>
      <option value>a  Day</option>
      <option value>a  Week</option>
      <option value>a  Month</option>
      <option value>a Year</option>
    </select>
  )
}
