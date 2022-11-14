import React , {useState} from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';

function App() {
  const [usersList,setUsersList] = useState([]);

  const getFormDataHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }

  return (
    <div>
<h1>React first project</h1>
<AddUser getFormData={getFormDataHandler}></AddUser>
<UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
