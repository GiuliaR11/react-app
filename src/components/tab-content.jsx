import { useContext } from 'react'
import './tab-content.css'
import { AppContext } from '../App';

function TabContent({elements, setElements}) {

  const appContext = useContext(AppContext)
  const {alpha} = appContext
  const {setTotalAlpha, totalAlpha} = alpha

  const handleCardPressed = (card) => {
    const operation = card.pressed 
      ? totalAlpha - card.value 
      : totalAlpha + card.value

    setTotalAlpha(operation)

    const updatedList = elements.map((item) =>
      item.label === card.label ? { ...item, pressed: !item.pressed } : item
    )
    setElements(updatedList)
  }

  return (
    <>
      {elements.map((card, index) => (
        <div 
          key={index} 
          className={['tab-card', card.pressed ? 'tab-card-active' : ''].join(' ')}
          onClick={() => handleCardPressed(card)}
        >
          <span>{card.label}</span>
          <span>{card.value}</span>
          <span>{card.pressed == true}</span>
        </div>
      ))}
    </>
  );
}

export default TabContent;