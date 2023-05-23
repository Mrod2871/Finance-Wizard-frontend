import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <main>
        <Link to={`/incomes`}>Incomes</Link> 
        <br></br>
        <Link to={`/expenses`}>Expenses</Link>
    </main>
  )
}

export default Sidebar