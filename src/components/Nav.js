import { useState, useEffect } from 'react';
import { login, logout } from '../services/firebase';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase'; // Import the Firebase auth instance

function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="nav">
      <Link to="/">
        <div>Finance Wizard</div>
      </Link>
      <Link to="/">
        <div>Dashboard</div>
      </Link>
      <Link to="/incomes">
        <div>Incomes</div>
      </Link>
      <Link to="/expenses">
        <div>Expenses</div>
      </Link>
      <ul>
        {user ? (
          <>
            <li>Welcome, {user.displayName}</li>
            <li onClick={logout}>Logout</li>
          </>
        ) : (
          <li onClick={login}>Login</li>
        )}
      </ul>
    </div>
  );
}

export default Nav;