import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const Show = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const Income = props.Income
  console.log(id);
  
  const Incomes =Income ? Income.find((p) => p._id === id ) : null

  const [ editForm, setEditForm ] = useState(Incomes)


  const [ isEditing, setisEditing ] = useState(false)

  useEffect( () =>{
    if(Incomes) {
      setEditForm(Incomes)
    }
  }, [Incomes])

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
    props.updateIncome(editForm, Incomes._id)
  }

  const handleEdit = () => {
    setisEditing(prevState => !prevState)
  }

  const handleDelete = () => {
    props.deleteIncome(Incomes._id)
    navigate('/')
  }

  const loaded = () => {
    return (
      <>
        <h1>{Incomes.name}</h1>
        <h2>{Incomes.amount}</h2>
        <button onClick={handleEdit}>{ isEditing ? 'Cancel Edit' : 'Edit'}</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="Income">
      { Incomes ? loaded() : loading() }

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
        <input type="submit" value="Update Income" />
      </form>
      }
    </div>
  )
}

export default Show