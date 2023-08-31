import './tabs-container.css'
import TabContent from './tab-content';
import { useContext } from "react";
import { useState } from 'react'
import {TABS} from '../utils/models'
import { BetaPageCtx } from '../pages/beta-page';
import BetaTabContent from './beta-tab-content';

const tab1List = [
  {
    label: 'A',
    value: 'A',
    pressed: false
  },
  {
    label: 'B',
    value: 'B',
    pressed: false
  },
  {
    label: 'C',
    value: 'C',
    pressed: false
  }
]

const tab2List = [
  {
    label: 'D',
    value: 'D',
    pressed: false
  },
  {
    label: 'E',
    value: 'E',
    pressed: false
  },
  {
    label: 'F',
    value: 'F',
    pressed: false
  }
]

const tab3List = [
  {
    label: 'G',
    value: 'G',
    pressed: false
  },
  {
    label: 'H',
    value: 'H',
    pressed: false
  },
  {
    label: 'I',
    value: 'I',
    pressed: false
  }
]


function BetaTabsContainer() {
  const [tab1Elements, setTab1Elements] = useState(tab1List)
  const [tab2Elements, setTab2Elements] = useState(tab2List)
  const [tab3Elements, setTab3Elements] = useState(tab3List)

  const context = useContext(BetaPageCtx)

  const selectedTab = context.selectedTab

  const getTabElements = (tab) => {
    if (tab === TABS.TAB1)
      return tab1Elements

    if (tab === TABS.TAB2)
      return tab2Elements

    return tab3Elements
  }

  const getTabElementsSetter = (tab) => {
    if (tab === TABS.TAB1)
      return setTab1Elements

    if (tab === TABS.TAB2)
      return setTab2Elements

    return setTab3Elements
  }

  return (
    <div className="tab-container">
      {Object.values(TABS).map(tab => (
        selectedTab === tab && (
          <BetaTabContent
            key={tab}
            elements={getTabElements(tab)}
            setElements={getTabElementsSetter(tab)}
          />
      )
    ))}
    </div>
  );
}
export default BetaTabsContainer;