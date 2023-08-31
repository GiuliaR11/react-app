import { useState } from 'react'
import './alpha-page.css'
import { createContext } from "react";
import { useContext } from "react";
import {TABS} from '../utils/models'
import { AppContext } from '../App';
import BetaTabsContainer from '../components/beta-tabs-container';

export const BetaPageCtx = createContext();

function BetaPage() {
  const appContext = useContext(AppContext);
  const {beta} = appContext
  const {totalBeta} = beta

  const [selectedTab, setSelectedTab] = useState(TABS.TAB1)

  return (
    <>
      <BetaPageCtx.Provider value={{selectedTab}}>
        <div className="header">
          <h1>BETA</h1>
          <h3>Total: {totalBeta}</h3>
        </div>

        <div className="tabs">
          <button className="tablinks" onClick={() => setSelectedTab(TABS.TAB1)}>{TABS.TAB1}</button>
          <button className="tablinks" onClick={() => setSelectedTab(TABS.TAB2)}>{TABS.TAB2}</button>
          <button className="tablinks" onClick={() => setSelectedTab(TABS.TAB3)}>{TABS.TAB3}</button>
        </div>
        <BetaTabsContainer/>
      </BetaPageCtx.Provider>
    </>
  );
}

export default BetaPage;