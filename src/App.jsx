import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllUsers from './pages/AllUsers'
import EditUser from './pages/EditUser'
import AddUser from './pages/AddUser'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllUsers />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/add' element={<AddUser />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
