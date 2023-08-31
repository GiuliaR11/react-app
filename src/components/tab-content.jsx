import './tab-content.css'

function TabContent({ctx, elements, setElements}) {

  const {updateTotal, total} = ctx

  const handleCardPressed = (card) => {
    const operation = card.pressed 
      ? total - card.value 
      : total + card.value

    updateTotal(operation)

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