import React from 'react'
import { Route,Routes,Link, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import Product from './components/Product'
import Men from "./components/Men"
import Women from './components/Women'
import Kid from './components/Kid'
import PageNotFound from './components/PageNotFound'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'

const App = () => {
  const navigator=useNavigate()
  return (
    <div>
      <div>
        <ul style={{display:'flex',gap:'20px'}}>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/aboutUs'>aboutus</Link>
          <Link to='/product'>Products</Link>
          <Link to='/courses'>Courses</Link>
        </ul>
      </div>
      <div className="navigator">
        <span onClick={()=>{navigator('/')}}>Go to home</span>
        <span onClick={()=>{navigator(-1)}}>Preivous</span>
        <span onClick={()=>{navigator(+1)}}>Next</span>
      </div>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/aboutUs' element={<AboutUs/>} ></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path="/product/men" element={<Men />}></Route>
        <Route path="/product/women" element={<Women />}></Route>
        <Route path="/product/kid" element={<Kid />}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/courses/:id' element={<CourseDetails/>}></Route>
    </Routes>
    </div>
  )
  
}

export default App