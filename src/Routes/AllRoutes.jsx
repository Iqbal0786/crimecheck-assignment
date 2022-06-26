
import React from 'react'
import {Routes,Route} from "react-router-dom"
import NoticePage from '../components/NoticePage'

export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<NoticePage/>}/>
    </Routes>
    </>
  )
}
