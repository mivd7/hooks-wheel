import React from 'react'
import './SpinningWheel.css'
import ContentDialog from './ContentDialog'
import {selectPoem} from '../lib/poems';

const SpinningWheelContainer = (props) => {
  const { items } = props;
  const [luckyItem, setLuckyItem] = React.useState('');
  const [luckyItems, setLuckyItems] = React.useState([]);
  const [wheelStyles, setWheelStyles] = React.useState({
      '--nb-item': items.length,
      '--selected-item': 0
  });
  const [spinning, setSpinning] = React.useState(null);
  const [dialog, setDialog] = React.useState({})
  const spinWheel = () => {
    setSpinning(true)
    setLuckyItem(items[Math.floor(Math.random() * items.length)]) 

    setTimeout(() => { 
      setSpinning(false)
    }, props.spinningTime)
  }

  React.useEffect(() => {
    if (luckyItem !== '') {
      setWheelStyles({
        '--nb-item': items.length,
        '--selected-item': items.indexOf(luckyItem)
      })
      setLuckyItems(luckyItems => luckyItems.indexOf(luckyItem) !== -1 ? luckyItems : [...luckyItems, luckyItem])
    }
  }, [luckyItem, items, props])

  React.useEffect(() => {
    const newItem = [...luckyItems].pop()
    console.log(luckyItems)
    setDialog({
      subject: newItem,
    })
  }, [luckyItems])
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
        {!spinning && <ContentDialog title={`Beste ${luckyItem}`} isOpened={luckyItem !== '' ? true : false} content={selectPoem(dialog.subject)}/>}
    </div>
    
    </>
  )
}

export default SpinningWheelContainer