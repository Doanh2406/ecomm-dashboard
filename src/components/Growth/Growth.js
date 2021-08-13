import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PaymentIcon from '@material-ui/icons/Payment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './Growth.scss'

const data = {
  labels: ['SunDay', 'MonDay', 'ThusDay', 'Wenesday', 'namday', 'Friday', 'Satuday'],
  datasets: [
    {
      label: 'This week',
      data: [100, 180, 150, 200, 250, 300, 270],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Last week',
      data: [90, 110, 75, 90, 100, 150, 200],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-1',
    },
  ],
};



const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: 20,
    color: theme.palette.text.secondary,
    marginRight: 20,
    
  },

}));
const optionss = {
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
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};
export default function Growth() {
 
  const classes = useStyles();
  const total = [
    {
      name: 'Total visit',
      icons: < VisibilityIcon />,
      total: 30000,
    },
    {
      name: 'Total payment',
      icons: < PaymentIcon />,
      total: 30000,
    },
    {
      name: 'Total orders',
      icons: <ShoppingCartIcon />,
      total: 30000,
    },
    {
      name: 'Total User',
      icons: <PersonIcon />,
      total: 30000,
    },
    {
      name: 'Total Statify',
      icons: <FavoriteBorderIcon   />,
      total: 30000,
    },
  ]
  return (
    <div className='re-container'>
      <Grid container xs={12} spacing={0}>
      
        <Grid item xs={6}>
        <Paper className={classes.paper} >
            
            {
                total.map((item, index) => (
    
                  <Paper key={index} className={classes.paper} >
                    <div className='gr-total-container' >
    
                      <div className='gr-total-title'>
                        {item.icons}
                        <div style={{ width: 10 }} />
                        <Typography variant='h5'>
                          {item.name}
                        </Typography>
                      </div>
                      <Typography variant='subtitle1'>
                        {item.total}
                      </Typography>
    
                    </div>
                  </Paper>
                )
                )
              }
              <div style={{height:20}} />
            </Paper>
          
          <Paper className={classes.paper}>
            <Typography variant="h4">Product order </Typography>
            <Bar data={data} />
          </Paper>

        </Grid>


        <Grid item xs={6}>
    
          <Paper className={classes.paper}>
            <Typography variant="h4">Money eaning</Typography>

            <Bar data={data} options={optionss} />
          </Paper>

       <Paper className={classes.paper}>
            <Typography variant="h4">User visit </Typography>

            <Line data={data} />
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
