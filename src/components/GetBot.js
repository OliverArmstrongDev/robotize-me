import React from 'react'


function GetBot({nameToChange}) {
  return (
   <div className='botSection'>
        {/* <input 
        type="text" 
        placeholder='Enter a name...'
        
        /> */}
        <br />
        { !nameToChange.length ? <h4>Waiting to find your bot...</h4>: 
        <div className="botImage">
            <h2>Hello! I am Robo-{nameToChange}</h2>
            <img src={`https://robohash.org/${nameToChange}?100x100`} alt="RoboImage" />
        </div> }
    </div>
  )
}

export default GetBot