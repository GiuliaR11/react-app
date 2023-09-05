import { useState } from 'react'
import './alpha-page.css'
import TabsContainer from '../components/tabs-container'
import { createContext } from "react";
import { useContext } from "react";
import {TABS} from '../utils/models'
import { AppContext } from '../App';
import useLeftAndRightKeyListener from '../hooks/useLeftAndRightKeyListener';

export const AlphaPageCtx = createContext();

function AlphaPage() {
  const appContext = useContext(AppContext);
  const {alpha} = appContext
  const {totalAlpha} = alpha

  const [selectedTab, setSelectedTab] = useState(TABS.TAB1);
  const tabsOrder = [TABS.TAB1, TABS.TAB2, TABS.TAB3];

  const handleLeftArrow = () => {
    const currentIndex = tabsOrder.indexOf(selectedTab);

    if (currentIndex > 0) {
      setSelectedTab(tabsOrder[currentIndex - 1]);
    }
  }

  const handleRightArrow = () => {
    const currentIndex = tabsOrder.indexOf(selectedTab);

    if (currentIndex < 2) {
      setSelectedTab(tabsOrder[currentIndex + 1]);
    }
  }

  useLeftAndRightKeyListener(handleLeftArrow, handleRightArrow);

  const getClassName = (tab) => {
    const active = tab === selectedTab
      ? 'tablinks-active'
      : ''
    return ['tablinks', active].join(' ')
  }

  return (
    <>
      <AlphaPageCtx.Provider value={{selectedTab}}>
        <div className="header">
          <h1>ALPHA</h1>
          <h3>Total: {totalAlpha}</h3>
        </div>

        <div className="tabs">
          <button className={getClassName(TABS.TAB1)} onClick={() => setSelectedTab(TABS.TAB1)}>{TABS.TAB1}</button>
          <button className={getClassName(TABS.TAB2)} onClick={() => setSelectedTab(TABS.TAB2)}>{TABS.TAB2}</button>
          <button className={getClassName(TABS.TAB3)} onClick={() => setSelectedTab(TABS.TAB3)}>{TABS.TAB3}</button>
        </div>
        <TabsContainer/>
      </AlphaPageCtx.Provider>
    </>
  );
}

export default AlphaPage;