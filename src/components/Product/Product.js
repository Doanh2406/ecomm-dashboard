import React from 'react'
import './Product.css'
import { Card, Table,FONTS,COLORS, SIZES } from '../../elements'
import Chart from './Chart'
import Chart2 from './Chart2'
export default function Product() {
  return (
    <div className='pro-container'>

      
      <Card height='96vh' styleContainer={{marginTop:SIZES.margin}} Content={() => (<>
        <div className='pro-estimate-head'>
        <p style={{...FONTS.h6,color:COLORS.lightGreen,fontSize:23}}>List Product</p>
        </div>
        <div className='pro-scroll' style={{ height: '85vh', overflowY: 'scroll' }} >
          <Table />
        </div>

      </>)} >

      </Card>
       

      <div className='pro-estimate'>
        <Card Content={() => (<>
          <div className='pro-estimate-head'>
          <p style={{...FONTS.h6,color:COLORS.lightGreen,fontSize:23}}>3 hot products</p>
          <Cs />
          </div>

          <Chart />
        </>
        )} />

       
        <Card  styleContainer={{marginTop:SIZES.margin,width:'90%',}} Content={() => (<>
        <div style={{display:'flex',flexDirection:'row',marginLeft:SIZES.margin}}>
          <Chart2 />
          <div className='brief'>
          <p style={{...FONTS.h6,fontSize:17,color:COLORS.transparentBlack}}>Products avalible:90090</p>
          <p style={{...FONTS.h6,fontSize:16}}>Products bought
             <Cs /> :3000</p> 
          </div>
        </div>
          
        </>
        )} />
       
      </div>




    </div>
  )
}

const Cs=()=>{
  return(
    <select className='pro-select' id='date' name='date'>
            <option value>a  Day</option>
            <option value>a  Week</option>
            <option value>a  Month</option>
            <option value>a Year</option>
          </select>
  )
}