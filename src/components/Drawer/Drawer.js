import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillShopping, AiOutlineLogout, AiFillShop, AiOutlineMenu, AiFillAccountBook, AiOutlineBarChart, AiOutlineLineChart, AiOutlinePartition, AiOutlineUser } from 'react-icons/ai'
import './Drawer.css';
import useWindowDimensions from './useWindowDimensions';


export default function Drawer() {
  const [show, setShow] = React.useState(true);
  const [open, setOpen] = React.useState('open');
  const handleMenu = () => {
    setShow(!show)
    if (show) {
      setOpen(null)
    }
    else {
      setOpen('open')
    }
  }
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
      link: '/products',
      name: 'Product',
      icons: <AiFillShop className='dr-icons' />
    },
    {
      link: '/payment',
      name: 'Payment',
      icons: <AiFillAccountBook className='dr-icons' />
    },
    {
      link: '/revenue',
      name: 'Revenue',
      icons: <AiOutlineBarChart className='dr-icons' />
    },
    {
      link: '/growth',
      name: 'Growth',
      icons: <AiOutlineLineChart className='dr-icons' />
    },
    {
      link: '/order',
      name: 'Orders',
      icons: <AiOutlinePartition className='dr-icons' />
    },
    {
      link: '/customers',
      name: 'Customers',
      icons: <AiOutlineUser className='dr-icons' />
    },

  ]
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width < 850) {
      setShow(false);
      console.log('cc')
      setOpen(null)
    }
    if (width > 850) {
      setShow(true)
      setOpen('open')
    }

  }, [width])


  return (
    <div className='dr'>
      <div id="nav-icon1" className={open} onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='dr-container' style={show ? { display: 'block' } : { display: 'none' }}>
        <div style={{ height: 30 }} />
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
