import React from 'react'
import './Product.css'
import { Card, Table } from '../../elements'

export default function Product() {
  return (
    <div className='pro-container'>


      <Card Content={() => (<>
        <div className='pro-estimate-head'>
          <p className='pro-text'>List all products</p>
        </div>
        <div className='pro-scroll' style={{ height: '85vh', overflowY: 'scroll' }} >
          <Table />
        </div>

      </>)} >

      </Card>


      <div className='pro-estimate'>
        <Card Content={() => (<>
          <div className='pro-estimate-head'>
            <p className='pro-text'>Top product that customer bought in</p>
            <select className='pro-select' id='date' name='date'>
              <option value>a  Day</option>
              <option value>a  Week</option>
              <option value>a Year</option>
            </select>
          </div>

          <div className='pro-scroll' style={{ height: '40vh', overflowY: 'scroll' }} >
            <Table />
          </div>
        </>
        )} />

        <Card Content={() => (<> <div className='pro-estimate-head'>
          <p className='pro-text'>Product that customer not bought in</p>
          <select className='pro-select' id='date' name='date'>
            <option value>a  Day</option>
            <option value>a  Week</option>
            <option value>a Year</option>
          </select>
        </div>
          <div className='pro-scroll ' style={{ height: '40vh', overflowY: 'scroll', }} >
            <Table />
          </div>
        </>)

        } />


      </div>




    </div>
  )
}
