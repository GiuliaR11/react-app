import './tabs-container.css'
import TabContent from './tab-content';
import { useContext } from "react";
import { useState } from 'react'
import {TABS} from '../utils/models'

const tab1List = [
  {
    label: 'A',
    value: 10,
    pressed: false
  },
  {
    label: 'B',
    value: 12,
    pressed: false
  },
  {
    label: 'C',
    value: 5,
    pressed: false
  }
]

const tab2List = [
  {
    label: 'D',
    value: 13,
    pressed: false
  },
  {
    label: 'E',
    value: 6,
    pressed: false
  },
  {
    label: 'F',
    value: 4,
    pressed: false
  }
]

const tab3List = [
  {
    label: 'G',
    value: 2,
    pressed: false
  },
  {
    label: 'H',
    value: 7,
    pressed: false
  },
  {
    label: 'I',
    value: 9,
    pressed: false
  }
]


function TabsContainer({ctx}) {
  const [tab1Elements, setTab1Elements] = useState(tab1List)
  const [tab2Elements, setTab2Elements] = useState(tab2List)
  const [tab3Elements, setTab3Elements] = useState(tab3List)

  const context = useContext(ctx);

  const selectedTab = context.selectedTab

  return (
    <div className="tab-container">
      {selectedTab === TABS.TAB1 && <TabContent elements={tab1Elements} setElements={setTab1Elements} ctx={context}/>}
      {selectedTab === TABS.TAB2 && <TabContent elements={tab2Elements} setElements={setTab2Elements} ctx={context}/>}
      {selectedTab === TABS.TAB3 && <TabContent elements={tab3Elements} setElements={setTab3Elements} ctx={context}/>}
    </div>
  );
}
export default TabsContainer;