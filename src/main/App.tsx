import { useState } from 'react'
import Navigations from '../components/Navifations'
import AppRouter from './AppRouter'
import "antd/dist/reset.css";

function App() {

  return (
    <div className="App">
      <Navigations/>
      <AppRouter/>
    </div>
  )
}

export default App
