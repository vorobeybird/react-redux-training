import React from 'react'

// COMPONENTS, RESOURCES, CONSTANTS
import './App.css'
import './styles/main.scss'
import './styles/app.scss'
import Routing from './routers/Routing'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => (
  <div className="App df">
    <Sidebar />
    <div className="app__content">
      <Routing />
    </div>
  </div>
)

export default App
