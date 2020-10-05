import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
function App (){
  const [ users, setUsers ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      fetchUsers();
      setLoading(false);
    },
    [ users ]
  );

  async function fetchUsers (){
    const res = await axios
      .get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
          .REACT_APP_GITHUB_CLIENT_SECRET}`
      )
      .then((res) => setUsers(res.data));
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
