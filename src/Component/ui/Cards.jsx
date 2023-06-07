import React, { useState } from 'react'
import useLinkedList from '../Hooks/useLinkedList';
import CTA from './CTA';
import headImage from '../../assets/first.jpg'
import sec from '../../assets/second.jpg'
import third from '../../assets/third.jpg'
import forth from '../../assets/forth.jpg'
import fifth from '../../assets/fifth.jpg'
import sixth from '../../assets/sixth.jpg'

function Cards( {initial} ) {

    let {head, length, append, deletes, print,currentNext, current} = useLinkedList()
    
    // initialized the first node
    if(!head) append(initial)
    
    // switch case counter
    const [img, setImg] = useState(0)

    const handleAppend = async () => {

        // eslint-disable-next-line default-case
        switch(img){
            case 0 : 
                append(headImage);         
                setImg(img + 1)
                break;
            case 1 : 
                append(sec);    
                setImg(img + 1)
                break;
            case 2 : 
                append(third);    
                setImg(img + 1)
                break;
            case 3 : 
                append(forth);    
                setImg(img + 1)
                break;
            case 4 : 
                append(fifth);    
                setImg(img + 1)
                break;
            default:
                append(sixth)
                setImg(0)
                break;
        }       

        // unsplash api

        // const URL = 'https://api.unsplash.com/photos/random?orientation=landscape&client_id=Er3kv6tD6pzOVwEPJlmvfTN2A3IJu7mlopDBGsdLseo'
        // const res = await fetch(URL)
        // const data = await res.json()
        // const img = data.urls.regular
        // append(img)
    };
  
  return (
    <div className="card">
        <div className="prev">
            <img onClick={print} src={!current ? initial : current.data} alt="" />
        </div>
        <div className='cta'>
            <CTA onClick={handleAppend} val={"Append"} className={'blue'}/>
            <CTA onClick={deletes} val={"Delete"} className={'red'} />
            <CTA onClick={currentNext} val={"Next"}  className={'blue'}/>
            { length }
        </div>
    </div>
  )
}

export default Cards