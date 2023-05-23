import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Incomes from "../pages/Incomes";
// import Expenses from "../pages/Expenses";


const Main = (props) => {
    const [income, setIncome] = useState(null)

    const URL = 'https://finance-wizard-backend.onrender.com/income/'

    const getIncome = async () =>{
        const response = await fetch(URL)

        const data = await response.json()
        setIncome(data)
    }

    const createIncome = async (income) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(income)
        })
        getIncome()
    }

    const updateIncome = async (income, id) =>{
        await fetch(URL + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(income),
        })
        getIncome()
    }

    const deleteIncome = async id =>{
        await fetch(URL + id, {
            method: 'DELETE',
        })
        getIncome()
    }

    useEffect( () => getIncome(), [])

    // const [expense, setExpense] = useState(null)

    // const URL2 = 'https://finance-wizard-backend.onrender.com/Expense'

    // const getExpense = async () =>{
    //     const response = await fetch(URL2)

    //     const data = await response.json()
    //     setExpense(data)
    // }

    // const createExpense = async (expense) => {
    //     await fetch(URL2, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "Application/json"
    //         },
    //         body: JSON.stringify(expense)
    //     })
    //     getExpense()
    // }

    // const updateExpense = async (expense, id) =>{
    //     await fetch(URL2 + id, {
    //         method: 'PUT',
    //         headers: {
    //             "Content-Type": "Application/json",
    //         },
    //         body: JSON.stringify(expense),
    //     })
    //     getExpense()
    // }

    // const deleteExpense = async id =>{
    //     await fetch(URL2 + id, {
    //         method: 'DELETE',
    //     })
    //     getExpense()
    // }

    // useEffect( () => getExpense(), [])

    return (
        <main>
        <Routes>
            <Route exact path='/incomes' element={<Incomes incomes={income} createIncome={createIncome}/>} 
            />

            <Route path='/incomes/:id' 
            element={<Incomes incomes={income} 
            deleteIncome={deleteIncome}
            updateIncome={updateIncome} />}
            />
            {/* <Route exact path='/expenses' element={<Expenses expenses={expense} createExpense={createExpense}/>} 
            />

            <Route path='/expenses/:id' 
            element={<Expenses expenses={expense} 
            deleteExpense={deleteExpense}
            updateExpense={updateExpense} />}
            /> */}
        </Routes>
        </main>
    )
}
export default Main