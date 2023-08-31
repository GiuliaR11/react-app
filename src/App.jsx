import { useState } from 'react'
import './App.css'
import OverviewPage from './pages/overview-page'
import Sidebar from './components/sidebar'
import { createContext } from "react";
import { betaTab1List, betaTab2List, betaTab3List } from './components/beta-lists';
import { alphaTab1List, alphaTab2List, alphaTab3List } from './components/alpha-lists';

export const AppContext = createContext();

const PAGES = {
  ALPHA: 'Alpha',
  BETA: 'Beta'
}

function App() {
  const [selectedPage, setSelectedPage] = useState(PAGES.ALPHA)
  const [totalAlpha, setTotalAlpha] = useState(0)
  const [totalBeta, setTotalBeta] = useState('')

  const [alphaTab1, setAlphaTab1List] = useState(alphaTab1List)
  const [alphaTab2, setAlphaTab2List] = useState(alphaTab2List)
  const [alphaTab3, setAlphaTab3List] = useState(alphaTab3List)

  const [betaTab1, setBetaTab1List] = useState(betaTab1List)
  const [betaTab2, setBetaTab2List] = useState(betaTab2List)
  const [betaTab3, setBetaTab3List] = useState(betaTab3List)

  const contextToProvide = {
    selectedPage,
    setSelectedPage,
    alpha: {
      setTotalAlpha,
      totalAlpha,
      tab1State: alphaTab1,
      tab2State: alphaTab2,
      tab3State: alphaTab3,
      setAlphaTab1List,
      setAlphaTab2List,
      setAlphaTab3List
    },
    beta: {
      setTotalBeta,
      totalBeta,
      tab1State: betaTab1,
      tab2State: betaTab2,
      tab3State: betaTab3,
      setBetaTab1List,
      setBetaTab2List,
      setBetaTab3List
    }
  }

  return (
    <AppContext.Provider value={contextToProvide}>
      <div className="main">
        <OverviewPage />
        <Sidebar/>
      </div>
    </AppContext.Provider>
  )
}

export default App
