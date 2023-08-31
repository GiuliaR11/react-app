import './tabs-container.css'
import TabContent from './tab-content';
import { useContext } from "react";
import {TABS} from '../utils/models'
import { AppContext } from '../App';
import { AlphaPageCtx } from '../pages/alpha-page';

function TabsContainer() {
  const alphaContext = useContext(AlphaPageCtx)
  const appContext = useContext(AppContext)

  const {selectedTab} = alphaContext

  const {alpha} = appContext
  const {tab1State, tab2State, tab3State, setAlphaTab1List, setAlphaTab2List, setAlphaTab3List} = alpha

  return (
    <div className="tab-container">
      {selectedTab === TABS.TAB1 && <TabContent elements={tab1State} setElements={setAlphaTab1List}/>}
      {selectedTab === TABS.TAB2 && <TabContent elements={tab2State} setElements={setAlphaTab2List}/>}
      {selectedTab === TABS.TAB3 && <TabContent elements={tab3State} setElements={setAlphaTab3List}/>}
    </div>
  );
}
export default TabsContainer;