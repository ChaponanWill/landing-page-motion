import React from 'react'
import Image from 'next/image'

function BackgroundRadialLeft() {
  return (
    <div className="left-0 absolute -z-50 top-0  ">
            <Image src="/assets/background-floated-left.png" alt="Circle left" width={850} height={650} />
            
        </div>
  )
}

export default BackgroundRadialLeft