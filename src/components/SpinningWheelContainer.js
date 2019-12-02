import React from 'react'
import './SpinningWheel.css'

const SpinningWheelContainer = (props) => {
  const { items } = props;
  const [luckyItem, setLuckyItem] = React.useState('');
  const [luckyItems, setLuckyItems] = React.useState([]);
  const [wheelStyles, setWheelStyles] = React.useState({
      '--nb-item': items.length,
      '--selected-item': 0
  });
  const [spinning, setSpinning] = React.useState(null);

  const spinWheel = () => {
    setSpinning(true)
    setLuckyItem(items[Math.floor(Math.random() * items.length)]) 

    setTimeout(() => { 
      setSpinning(false)
    }, props.spinningTime)
  }

  console.log(luckyItems)

  React.useEffect(() => {
    if (luckyItem !== '') {
      setWheelStyles({
        '--nb-item': items.length,
        '--selected-item': items.indexOf(luckyItem)
      })
      setLuckyItems(luckyItems => luckyItems.indexOf(luckyItem) !== -1 ? luckyItems : [...luckyItems, luckyItem])
    }
  }, [luckyItem, items, props])

  console.log(spinning)
  return(
    <>    
    <div className="wheel-container">
        {spinning === false ? <div className="wheel" style={wheelStyles} onClick={spinWheel}>
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
    <div className="result">{!spinning && <p>{luckyItem}</p>}</div>
    </>
  )
}

export default SpinningWheelContainer