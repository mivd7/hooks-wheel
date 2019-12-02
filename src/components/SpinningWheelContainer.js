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

  const spinWheel = () => {
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
    setTimeout(() => setLuckyItem(''), props.spinningTime * 3)
  }, [luckyItem, items, props])

  return(
    <>    
    <div className="wheel-container">
        {luckyItem === '' ? <div className="wheel" style={wheelStyles} onClick={spinWheel}>
          {items.map((item, index) => (
                        <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                          {item}
                        </div>
                    ))}
        </div> : <div className="wheel spinning" style={wheelStyles} onClick={spinWheel}>
          {items.map((item, index) => (
                        <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                          {item}
                        </div>
                    ))}
        </div>}
    </div>
    <div className="result">{luckyItem !== '' && !spinning && <p>{luckyItem}</p>}</div>
    </>
  )
}

export default SpinningWheelContainer
