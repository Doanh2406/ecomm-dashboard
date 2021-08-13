import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { DataGrid } from '@material-ui/data-grid';
import './Order.scss'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const data = {
  labels: ['SunDay', 'MonDay', 'ThusDay', 'Wenesday', 'namday', 'Friday', 'Satuday'],
  datasets: [
    {
      label: 'Order',
      data: [100, 180, 150, 200, 250, 300, 270],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Pending',
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
export default function Order() {

  const classes = useStyles();

  return (
    <div className='re-container'>
      <Grid container xs={12} spacing={0}>

        <Grid item xs={6}>
          <Paper className={classes.paper} >
            <Typography variant="h4">Lastest Order </Typography>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
          </Paper>

          

        </Grid>


        <Grid item xs={6}>

          

          <Paper className={classes.paper}>
            <Typography variant="h4">Order solving </Typography>

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
