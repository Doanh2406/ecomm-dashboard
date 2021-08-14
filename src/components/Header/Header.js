import { Typography } from '@material-ui/core'
import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

import './Header.scss'
export default function Header({title}) {
  return (
    <div className='hd-container'>
      <div className='hd-dr' style={{ minWidth: 240 }} />
      <div style={{width:10}} />
      <Typography variant='h4'>
        {title}
      </Typography>
      <div className='hd-search' >
        <div style={{width:'79%'}} />
        <form className="search-container">
          <input type="text" id="search-bar" placeholder="Search" />
          <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
        </form>
      </div>
      <div style={{ width: 30 }} />
      <div className='hd-tool'  >
        <NotificationsIcon className='hd-icons' />
        <SettingsIcon className='hd-icons' />
        <HelpIcon className='hd-icons' />
        <div className='hd-avarta-container'>
          <img className="avatar" src="http://placeimg.com/80/80/people" />
        </div>
      </div>
    </div>
  )
}
