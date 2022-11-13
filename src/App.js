import React from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {
  return (
    <div>
<h1>React first project</h1>
<AddUser></AddUser>
<UsersList users={[]}></UsersList>
    </div>
  );
}

export default App;
