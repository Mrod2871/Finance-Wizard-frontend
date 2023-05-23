import React, {useState} from 'react'

import { Link } from "react-router-dom"

function Expenses(props) {

    const [ newForm, setNewForm] = useState({
        name: '',
        amount: '',
    })

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createExpenses(newForm)
        setNewForm({
            name: '',
            amount: '',
        })
    }

  // loaded function
  const loaded = () => {
    return props.Expense.map((expense) => (
      <div key={expense._id} className="expense">
        <Link to={`/expense/${expense._id}`}><h1>{expense.name}</h1></Link>
        <h3>{expense.amount}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={newForm.amount}
          name="amount"
          placeholder="amount"
          onChange={handleChange}
        />
        <input type="submit" value="Create Expense" />
      </form>
      {props.Expense ? loaded() : loading()}
    </section>
  )
}

export default Expenses;