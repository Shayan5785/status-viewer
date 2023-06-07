import './Panel.css';
import logo from '../../assets/logo192.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Cards from '../ui/Cards';
import fifth from '../../assets/fifth.jpg'
import { useState } from 'react';
import { listCountContext } from '../Context/listCountContext';

function Panel() {
    const [cardsCount, setCardsCount] = useState([fifth] )
    const handleCount = () => {
      setCardsCount( [...cardsCount, fifth] )
    }

  return (
    <listCountContext.Provider value={{cardsCount,setCardsCount}} >
      <div className='PanelContainer'>
          <div className="header">
              <img className='headerItem' src={logo} alt="STATUS VIEWER." width={'40px'}/>
              <AddCircleOutlineIcon onClick={handleCount} className='headerItem'  sx={{cursor: "pointer",  fontSize:"40px"}} />
          </div>

          <div className="CardContainer">
            { cardsCount.map( (item, index) => ( <Cards key={index} initial={item} /> ) ) } 
          </div>
      </div>
    </listCountContext.Provider>
  )
}

export default Panel