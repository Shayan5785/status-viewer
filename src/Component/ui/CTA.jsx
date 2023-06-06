import React from 'react'

function CTA({val,className,onClick}) {
    // console.log(className)
  return (
    <div className="cta" onClick={onClick}>
        <div className={`a ${className}`}> {val} </div>
    </div>
  )
}

export default CTA