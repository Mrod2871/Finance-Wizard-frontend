import React from 'react'
import Sidebar from "../components/Sidebar"
import Nav from '../components/Nav'

function Dashboard() {
  return (
    <div className='Dashboard'>
      <Nav /> 
      <Sidebar /> 
    </div>
  )
}

export default Dashboard