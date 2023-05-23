import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Main2 from './components/Main2';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
 
  return() =>{
    unsubscribe()
  } 
},[])

  return (
    <div className="App">
      <Nav user={user} />
      <Main user={user} />
      <Main2 user={user} />
      <h1>Welcome to the Marvelous Finance Wizard</h1>
    </div>
  );
}

export default App;
