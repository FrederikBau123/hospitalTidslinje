import React from 'react'
import hospitalLogo from './images/hospitalLogo.svg'

export default function Option1(){
  return(
    <div>
      <div className="header">
        <div className="headerFont">
          Min Bruger
        </div>
      </div>
      <img className="hospitalLogo" src={hospitalLogo} />
    </div>
  )
}
