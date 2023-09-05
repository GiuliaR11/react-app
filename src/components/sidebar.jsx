import './sidebar.css'
import { useContext } from "react";
import { AppContext } from "../App";
import useUpAndDownKeyListener from '../hooks/useUpAndDownKeyListener';

const PAGES = {
  ALPHA: 'Alpha',
  BETA: 'Beta'
}

function Sidebar() {
  const context = useContext(AppContext);
  const {setSelectedPage, selectedPage} = context

  const onPageChanged = () => {
    const changeToTab = selectedPage === PAGES.ALPHA 
      ? PAGES.BETA
      : PAGES.ALPHA
    setSelectedPage(changeToTab)
  }

  useUpAndDownKeyListener(onPageChanged);

  const changeSelectedTab = (e) => {
    setSelectedPage(e.target.value)
  }

  const getClassName = (tab) => {
    const active = tab === selectedPage
      ? 'button-active'
      : ''
    return ['button', active].join(' ')
  }

  return (
    <div className='sidebar-container'>
      <button onClick={changeSelectedTab} className={getClassName(PAGES.ALPHA)} value={PAGES.ALPHA}>{PAGES.ALPHA}</button>
      <button onClick={changeSelectedTab} className={getClassName(PAGES.BETA)} value={PAGES.BETA}>{PAGES.BETA}</button>
    </div>
  );
}

export default Sidebar;