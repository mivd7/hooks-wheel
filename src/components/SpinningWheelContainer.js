import React from 'react'
import './SpinningWheel.css'

const SpinningWheelContainer = (props) => {
  const { items } = props;
  const [luckyItem, setLuckyItem] = React.useState('');
  const [wheelStyles, setWheelStyles] = React.useState({
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
    setWheelStyles({
      '--nb-item': items.length,
      '--selected-item': items.indexOf(luckyItem)
    })
  }, [luckyItem, items])

  return(
    <>    
    <div className="wheel-container">
        <div className="wheel spinning" style={wheelStyles} onClick={startSpinning}>
          {items.map((item, index) => (
                        <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                          {item}
                        </div>
                    ))}
        </div>
    </div>
    <div className="result">{luckyItem !== '' && !spinning && <p>{luckyItem}</p>}</div>
    </>
  )
}

export default SpinningWheelContainer
