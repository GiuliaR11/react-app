import './tabs-container.css'
import { useContext } from "react";
import {TABS} from '../utils/models'
import { BetaPageCtx } from '../pages/beta-page';
import BetaTabContent from './beta-tab-content';
import { AppContext } from '../App';

function BetaTabsContainer() {
  const betaContext = useContext(BetaPageCtx)
  const appContext = useContext(AppContext)

  const {selectedTab} = betaContext

  const {beta} = appContext
  const {
    tab1State, 
    tab2State, 
    tab3State, 
    setBetaTab1List, 
    setBetaTab2List, 
    setBetaTab3List
  } = beta

  const getTabElements = (tab) => {
    if (tab === TABS.TAB1)
      return tab1State

    if (tab === TABS.TAB2)
      return tab2State

    return tab3State
  }

  const getTabElementsSetter = (tab) => {
    if (tab === TABS.TAB1)
      return setBetaTab1List

    if (tab === TABS.TAB2)
      return setBetaTab2List

    return setBetaTab3List
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