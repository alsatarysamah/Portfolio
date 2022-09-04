import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import './App.scss'
// import {initializeApp} from "firebase"
import Sidebar from './components/Sidebar'
function App() {
  // const app1= initializeApp();

  return (
    <>
    {/* <Sidebar /> */}
      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/projects" element={<Portfolio />} />
          <Route path="/portfolio/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
