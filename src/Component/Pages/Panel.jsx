import './Panel.css';
import logo from '../../assets/logo192.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Cards from '../ui/Cards';

function Panel() {

  const handleLinkedList = () => {

  }



  return (
    <div className='PanelContainer'>
        <div className="header">
            <img className='headerItem' src={logo} alt="STATUS VIEWER." width={'40px'}/>
            <AddCircleOutlineIcon onClick={handleLinkedList} className='headerItem'  sx={{cursor: "pointer",  fontSize:"40px"}} />
        </div>

        <div className="CardContainer">
          <Cards/>
        </div>
    </div>
  )
}

export default Panel