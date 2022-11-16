import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

   //  fetching data coming from child component AddUser.js
  const getFormDataHandler = (uName, uAge, uClg) => {      

    const updatedUsersList = [...usersList,{name: uName, age: uAge, clg: uClg, id: Math.random().toString() }];
    setUsersList(updatedUsersList);
    // setUsersList((prevUsersList) => {
    //   return [
    //     ...prevUsersList,
    //     { name: uName, age: uAge, id: Math.random().toString() },
    //   ];
    // });
  };

  return (
    <div>
      <AddUser getFormData={getFormDataHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
