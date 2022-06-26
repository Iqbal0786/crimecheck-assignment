
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../components/Login'
import NoticePage from '../components/NoticePage'
import Register from '../components/Register'

export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<NoticePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}
