import React from 'react'
import ContentDialog from './ContentDialog'
import './Intro.css'

const Intro = () => {
  const title = 'Beste familie'
  const content = "Help Digipiet de cadeautjes verdelen. Met het rad van fortuin gaat het heel eerlijk. En kunnen jullie gauw gaan spelen, wat heerlijk. Geef het rad een draai, draai, draai, draai er aan. Is het jouw naam? Dan krijg je een cadeautje. Anders een hand vol pepernoten."
  return(
    <div className="message-box">
      1 nieuw bericht van de Computerpiet<br/>  
      <ContentDialog title={title} content={content} />
    </div>
  )
}

export default Intro;