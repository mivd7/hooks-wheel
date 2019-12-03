import React from 'react'
import computerpiet from '../assets/computerpiet';

export default Intro = () => {
  const [isOpened, setIsOpened] = React.useState(false)  
  const [messageSeen, setMessageSeen] = React.useState(false) 
  return(
    <div>
      <img src={computerpiet} className="computer-piet" alt="computerpiet"></img>
      1 nieuw bericht van de Computerpiet  
      Klik openen   
    </div>
  )
}
