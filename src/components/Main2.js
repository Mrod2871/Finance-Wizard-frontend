import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Expenses from "../pages/Expenses";
import Shows from "../pages/ExpensesShow";

const Main2 = (props) => {
    const [Expense, setExpense] = useState(null)

    const URL = 'https://finance-wizard-backend.onrender.com/expense/'

    const getExpenses = async () =>{
        const response = await fetch(URL)

        const data = await response.json()
        setExpense(data)
        
    }

    const createExpenses = async (Expense) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(Expense)
        })
        getExpenses()
    }

    const updateExpense = async (Expense, id) =>{
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(Expense),
        })
        getExpenses()
    }

    const deleteExpense = async id =>{
        await fetch(URL + id, {
            method: 'DELETE',
        })
        getExpenses()
    }

    useEffect( () => getExpenses, [])
    return (
        
        <main>
            
        <Routes>
            <Route exact path='/expense' element={<Expenses Expense={Expense} createExpenses={createExpenses}/>} 
            />

            <Route path='/expense/:id' 
            element={<Shows Expense={Expense} 
            deleteExpense={deleteExpense}
            updateExpense={updateExpense} />}
            />
        </Routes>
        </main>
        
    )
    
}

export default Main2