import './Panel.css';
import logo from '../../assets/logo192.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Cards from '../UI/Cards';
import { useState } from 'react';

function Panel() {
  // keeping the track of number of linked List
    const [cardsCount, setCardsCount] = useState([])

    // updating the number of linked List and creating a new node that contain an image 
    const handleCount = async () => {
        const URL = 'https://api.unsplash.com/photos/random?orientation=landscape&client_id=Er3kv6tD6pzOVwEPJlmvfTN2A3IJu7mlopDBGsdLseo'
        const res = await fetch(URL)
        const data = await res.json()
        const img = data.urls.regular
      setCardsCount( [...cardsCount, img] )
    }

  return (
    <div className='PanelContainer'>
        <div className="header">
            <img 
              className='headerItem' 
              src={logo} 
              alt="STATUS VIEWER." 
              width={'40px'}/>
            
            <AddCircleOutlineIcon 
              onClick={handleCount} 
              className='headerItem' 
              sx={{cursor: "pointer",  fontSize:"40px"}} />
        </div>

        <div className="CardContainer">
          { cardsCount.map( (item, index) => ( <Cards key={index} initial={item} /> ) ) } 
        </div>
    </div>
  )
}

export default Panel