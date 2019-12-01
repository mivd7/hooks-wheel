import React from 'react'
import './SpinningWheel.css'

const SpinningWheelContainer = (props) => {
  const { items } = props;
  const [luckyItem, setLuckyItem] = React.useState([]);
  const [wheelVars, setWheelVars] = React.useState({
      '--nb-item': items.length,
      '--selected-item': items.indexOf(luckyItem)
  });
  const [spinning, setSpinning] = React.useState(false);

  const startSpinning = () => {
    setSpinning(true)
    setLuckyItem(items[Math.floor(Math.random() * items.length)]) 

    setTimeout(() => { 
      setSpinning(false) 
    }, props.spinningTime)
  }

  React.useEffect(() => {
    setWheelVars({
      '--nb-item': items.length,
      '--selected-item': items.indexOf(luckyItem)
    })
  }, [luckyItem, items])

  return(
    <>    
    <div className="wheel-container">
        <div className="wheel spinning" style={wheelVars} onClick={startSpinning}>
          {items.map((item, index) => (
                        <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                          {item}
                        </div>
                    ))}
        </div>
    </div>
    <div className="result">{luckyItem.length > 0 && !spinning && <p>{luckyItem}</p>}</div>
    </>
  )
}

export default SpinningWheelContainer
