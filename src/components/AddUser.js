import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");
  const [enteredUserclg, setEnteredUserclg] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
  };

  const userclgChangeHandler = (event) => {
    setEnteredUserclg(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };


  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredUserage < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    console.log(enteredUsername, enteredUserage, enteredUserclg);
    props.getFormData(enteredUsername, enteredUserage, enteredUserclg);  // passing data to the parent component App.js
    setEnteredUsername("");
    setEnteredUserage("");
    setEnteredUserclg("");
  };

  return (
    <div>
        {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={userageChangeHandler}
            value={enteredUserage}
          />
           <label htmlFor="clg"> College name</label>
           <input
            type="text"
            id="clg"
            onChange={userclgChangeHandler}
            value={enteredUserclg}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
