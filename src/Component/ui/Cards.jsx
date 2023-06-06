import React, { useState } from 'react'
import useLinkedList from '../Hooks/useLinkedList';
import CTA from './CTA';
import headImage from '../../assets/first.jpg'
import sec from '../../assets/second.jpg'
import third from '../../assets/third.jpg'

function Cards() {
    const [i, setI] = useState(0)

    let {append, deletes, print} = useLinkedList()
    const handleAppend = () => {
        if( i === 0){
            append(headImage);
        } else if(i === 1){
            append(sec);
        } else if(i === 2){
            append(third);
        }  else {
            append("nothing more");            
        }
        setI(i + 1)
    };
  
    const handleDeletes = () => {
      deletes()
    }
  
    const handlePrint = () => {
      print()
    };

  return (
    <div className="card">
        <div className="prev">
            <img src={headImage} alt="" />
        </div>
        <div className='cta'>
            <CTA onClick={handleAppend} val={"Add Node"} />
            <CTA onClick={handleDeletes} val={"Delete List"} className={'red'} />
            <CTA onClick={handlePrint} val={"Print List"} className={'red'} />
        </div>
    </div>
  )
}

export default Cards