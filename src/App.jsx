import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./component/Header/Header.jsx"
import Sidebar from './component/sidebar/Sidebar.jsx'
import './App.css'

function App() {

  return (
    <div className='w-full flex flex-row justify-center items-start'>
      <div className='w-[15%]'>
        <Sidebar />
      </div>
      <div className='w-[85%]'>
        <Header />
      </div>

    </div>
  )
}

export default App
