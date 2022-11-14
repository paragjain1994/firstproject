import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserage < 0) {
      return;
    }
    console.log(enteredUsername, enteredUserage);
    props.getFormData(enteredUsername,enteredUserage);
    setEnteredUsername("");
    setEnteredUserage("");
  };

  return (
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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
