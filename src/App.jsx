import { useState } from 'react'
import './App.css'
import OverviewPage from './pages/overview-page'
import Sidebar from './components/sidebar'
import { createContext } from "react";

export const AppContext = createContext();

const PAGES = {
  ALPHA: 'Alpha',
  BETA: 'Beta'
}

function App() {
  const [selectedPage, setSelectedPage] = useState(PAGES.ALPHA)
  const [totalAlpha, setTotalAlpha] = useState(0)
  const [totalBeta, setTotalBeta] = useState(0)

  const updateContextValue = (value) => {
    setSelectedPage(value)
  }

  const updateAlphaTotal = (value) => {
    setTotalAlpha(value)
  }

  const updateBetaTotal = (value) => {
    setTotalBeta(value)
  }

  const contextToProvide = {
    selectedPage,
    updateContextValue,
    updateAlphaTotal,
    updateBetaTotal,
    totalAlpha,
    totalBeta
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
