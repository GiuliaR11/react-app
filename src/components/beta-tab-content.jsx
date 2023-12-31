import { useContext } from 'react';
import './tab-content.css'
import { AppContext } from '../App';

function BetaTabContent({elements, setElements}) {

  const appContext = useContext(AppContext)
  const {beta} = appContext
  const {setTotalBeta, totalBeta} = beta

  const handleCardPressed = (card) => {

    const operation = card.pressed 
      ? totalBeta.replace(card.value, '')
      : totalBeta.concat(card.value)

      setTotalBeta(operation)

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

export default BetaTabContent;