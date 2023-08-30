import './tab-content.css'

function TabContent({ctx, elements, setElements}) {

  const updateTotal = (value) => {
    ctx.updateTotal(value)
  }
  
  const handleCardPressed = (card) => {
    if (!card.pressed) {
      updateTotal(ctx.total + card.value)
    } else {
      updateTotal(ctx.total - card.value)
    }
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