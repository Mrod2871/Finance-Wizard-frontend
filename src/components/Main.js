import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Incomes from "../pages/Incomes";
import Show from "../pages/IncomesShow";



const Main = (props) => {
    const [Income, setIncome] = useState(null)

    const URL = 'https://finance-wizard-backend.onrender.com/income/'

    const getIncomes = async () =>{
        const response = await fetch(URL)

        const data = await response.json()
        setIncome(data)
        
    }

    const createIncomes = async (Income) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(Income)
        })
        getIncomes()
    }

    const updateIncome = async (Income, id) =>{
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(Income),
        })
        getIncomes()
    }

    const deleteIncome = async id =>{
        await fetch(URL + id, {
            method: 'DELETE',
        })
        getIncomes()
    }

    useEffect( () => getIncomes(), [])
    return (
        
        <main>
            
        <Routes>
            <Route exact path='/income' element={<Incomes Income={Income} createIncomes={createIncomes}/>} 
            />

            <Route path='/income/:id' 
            element={<Show Income={Income} 
            deleteIncome={deleteIncome}
            updateIncome={updateIncome} />}
            />
        </Routes>
        </main>
        
    )
    
}

export default Main