import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const Shows = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const Expense = props.Expense
  console.log(id);
  
  const Expenses =Expense ? Expense.find((p) => p._id === id ) : null

  const [ editForm, setEditForm ] = useState(Expenses)


  const [ isEditing, setisEditing ] = useState(false)

  useEffect( () =>{
    if(Expenses) {
      setEditForm(Expenses)
    }
  }, [Expenses])

  // handling form data change
  const handleChange = (e) => {
    setEditForm( {
      ...editForm,
     [e.target.name]: e.target.value 
    })
  }
  
  // handling submit event for edit form
  const handleUpdate = (e) => {
    e.preventDefault()
    props.updateExpense(editForm, Expenses._id)
  }

  const handleEdit = () => {
    setisEditing(prevState => !prevState)
  }

  const handleDelete = () => {
    props.deleteExpense(Expenses._id)
    navigate('/')
  }

  const loaded = () => {
    return (
      <>
        <h1>{Expenses.name}</h1>
        <h2>{Expenses.amount}</h2>
        <button onClick={handleEdit}>{ isEditing ? 'Cancel Edit' : 'Edit'}</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="Expense">
      { Expense ? loaded() : loading() }

      { isEditing && 
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="number"
          value={editForm.amount}
          name="amount"
          placeholder="amount"
          onChange={handleChange}
        />
        <input type="submit" value="Update Expense" />
      </form>
      }
    </div>
  )
}

export default Shows