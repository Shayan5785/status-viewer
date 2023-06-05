import React from 'react'
import './Panel.css';
import logo from '../../assets/logo192.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Panel() {
  return (
    <div className='PanelContainer'>
        <div className="header">
            <img className='headerItem' src={logo} alt="STATUS VIEWER." width={'40px'}/>
            <AddCircleOutlineIcon className='headerItem'  sx={{cursor: "pointer",  fontSize:"40px"}} />
        </div>
    </div>
  )
}

export default Panel