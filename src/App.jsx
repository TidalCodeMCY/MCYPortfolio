import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Index.jsx'
import Home from './components/Pages/Home/Index.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App