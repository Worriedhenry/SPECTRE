import Header from './Components/Header'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Pages/Search'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='search/:name' element={<Search />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  )
}
