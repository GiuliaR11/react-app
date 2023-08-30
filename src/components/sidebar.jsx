import './sidebar.css'
import { useContext } from "react";
import { AppContext } from "../App";

const PAGES = {
  ALPHA: 'Alpha',
  BETA: 'Beta'
}

function Sidebar() {
  const context = useContext(AppContext);

  const changeSelectedTab = (e) => {
    context.updateContextValue(e.target.value)
  }

  return (
    <div className='sidebar-container'>
      <button onClick={changeSelectedTab} className='button' value={PAGES.ALPHA}>{PAGES.ALPHA}</button>
      <button onClick={changeSelectedTab} className='button' value={PAGES.BETA}>{PAGES.BETA}</button>
    </div>
  );
}

export default Sidebar;