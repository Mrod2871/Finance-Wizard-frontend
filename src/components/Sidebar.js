import React from 'react'
import { Link } from 'react-router-dom'
import Incomes from '../pages/Incomes'

function Sidebar() {
  return (
    <main>
        <Link to={`/income`}>Incomes</Link>
    </main>
  )
}

export default Sidebar