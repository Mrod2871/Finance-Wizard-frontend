import React, {useState} from 'react'

import { Link } from "react-router-dom"

function Incomes(props) {

    const [ newForm, setNewForm] = useState({
        name: '',
        amount: '',
    })

    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createIncomes(newForm)
        setNewForm({
            name: '',
            amount: '',
        })
    }

  // loaded function
  const loaded = () => {
    return props.Income.map((Income) => (
      <div className='format'>
        <div key={Income._id} className="income">
          <Link to={`/income/${Income._id}`}><h1>{Income.name}</h1>
          </Link>
          <h3>{Income.amount}</h3>
        </div>
      </div>
    ));
  };
console.log(props.Income)
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
        <input type="submit" value="Create Income" />
      </form>
      {props.Income ? loaded() : loading()}
    </section>
  )
}

export default Incomes;