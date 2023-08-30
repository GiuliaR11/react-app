import { useContext } from "react";
import './overview-page.css'
import AlphaPage from './alpha-page';
import BetaPage from './beta-page';
import { AppContext } from "../App";

const PAGES = {
  ALPHA: 'Alpha',
  BETA: 'Beta'
}

function OverviewPage() {
  const context = useContext(AppContext);

  const isAlphaSelected = () => {
    return context.selectedPage === PAGES.ALPHA
  }

  return (
    <div className="overview-container">
      {isAlphaSelected() && <AlphaPage/>}
      {!isAlphaSelected() && <BetaPage/>}
    </div>
  );
}

export default OverviewPage;