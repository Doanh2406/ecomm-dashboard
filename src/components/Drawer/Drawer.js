import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillShopping, AiOutlineLogout, AiFillShop, AiFillAppstore, AiFillAccountBook, AiOutlineBarChart, AiOutlineLineChart, AiOutlinePartition, AiOutlineUser } from 'react-icons/ai'
import './Drawer.css'
export default function Drawer() {
  

  return (
    <div className='dr-container'>
    

      <NavLink to='/' style={{ textDecoration: 'none',color:'black' }}>
        <div className='home-button dr-button'  >
          <AiFillShopping className='dr-icons' />
          <p>E-commerce</p>
        </div>
      </NavLink>

      <NavLink to='/customer' activeStyle={{ color: '#000' }} style={{ textDecoration: 'none',color:'black' }}>
        <div className='dr-button'>
          <AiFillAppstore className='dr-icons' />
          <p>Overview</p>
        </div>
      </NavLink>


      <div className='dr-button'>
        <AiFillShop className='dr-icons' />
        <p>Product</p>
      </div>


      <div className='dr-button'>
        <AiFillAccountBook className='dr-icons' />
        <p>Payments</p>
      </div>


      <div className='dr-button'>
        <AiOutlineBarChart className='dr-icons' />
        <p>Revenue</p>
      </div>


      <div className='dr-button'>
        <AiOutlineLineChart className='dr-icons' />
        <p>Growth</p>
      </div>


      <div className='dr-button'>
        <AiOutlinePartition className='dr-icons' />
        <p>Orders</p>
      </div>


      <div className='dr-button'>
        <AiOutlineUser className='dr-icons' />
        <p>Customers</p>
      </div>


      <div className='logout dr-button'>
        <AiOutlineLogout className='dr-icons' />
        <p>Logout</p>
      </div>


      <div style={{ height: 10 }} />
    </div>
  )
}
