import React from 'react'
import './ViewContainer.css';
import CTA from '../ui/CTA'
import useLinkedList from '../Hooks/useLinkedList';

function ViewContainer() {
  const { append, print } = useLinkedList()
  const handleAppend = () => {
    append('New Data');
  };

  const handlePrint = () => {
    print()
  };


  
  return (
    <div className='ViewContainer'>
      <div className="player">

      </div>
      
      <div className="cta">
        <CTA onClick={handleAppend} val={'Delete Node'} className={"red"} />
        <CTA onClick={handlePrint} val={'Next Node'}  />
      </div>
    </div>
  )
}

export default ViewContainer