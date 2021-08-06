import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillShopping, AiOutlineLogout, AiFillShop, AiFillAppstore, AiFillAccountBook, AiOutlineBarChart, AiOutlineLineChart, AiOutlinePartition, AiOutlineUser } from 'react-icons/ai'
import './Drawer.css';



export default function Drawer() {
  const activeStyle = {
    color: '#c300d9',
    marginLeft: '20px',


  }
  const menu = [
    {
      link: '/overview',
      name: 'Over View',
      icons: <AiFillShopping className='dr-icons' />
    },
    {
      link: '/product',
      name: 'Product',
      icons: <AiFillShop className='dr-icons' />
    },
    {
      link: '/payment',
      name: 'Payment',
      icons: <AiFillAccountBook className='dr-icons' />
    },
    {
      link: '/customer',
      name: 'Revenue',
      icons: <AiOutlineBarChart className='dr-icons' />
    },
    {
      link: '/customer',
      name: 'Growth',
      icons: <AiOutlineLineChart className='dr-icons' />
    },
    {
      link: '/customer',
      name: 'Orders',
      icons: <AiOutlinePartition className='dr-icons' />
    },
    {
      link: '/customer',
      name: 'Customers',
      icons: <AiOutlineUser className='dr-icons' />
    },

  ]

  return (
    <div className='dr'>
      <div className='dr-container'>


        <NavLink exact to='/' style={{ textDecoration: 'none', color: 'black' }}></NavLink>
        <div className='home-button dr-button'  >
          <AiFillShopping className='dr-icons' />
          <p>E-commerce</p>
        </div>


        {
          menu.map((item, index) => (

            <NavLink key={index} to={item.link} activeStyle={activeStyle} style={{ textDecoration: 'none', color: 'black' }}>
              <div className='dr-button'>
                {item.icons}
                <p>{item.name}</p>
              </div>
            </NavLink>
          ))
        }

        
      

          
        <div className='logout dr-button'>
          <AiOutlineLogout className='dr-icons' />
          <p>Logout</p>
        </div>


        <div style={{ height: 10 }} />
      </div>
    </div>
  )
}
