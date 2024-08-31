import './App.css'
import { Routes, Route } from 'react-router-dom'
import Create from './pages/Create'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Landing from './pages/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing></Landing>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/create' element={<Create></Create>}/>
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </>
  )
}

export default App
