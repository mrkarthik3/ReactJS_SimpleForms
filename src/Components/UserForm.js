import react, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const handleUsername = (event) => {
    setUserName(event.target.value);
  };
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: userName,
      age: age,
      id: Math.ceil(Math.random() * 1000000),
    };
    console.log(data);
    console.log(Number(data.age));
    props.pullData(data);

    //reset form fields
    setUserName("");
    setAge("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple UserForm with 2-Way Data Binding, Hooks & Validation</h2>
      <p>Try entering blank/incorrect data to view Error Modal.</p>
      <div>
        <label className={styles.label}>Username</label> <br />
        <input
          className={styles.form}
          type="text"
          onChange={handleUsername}
          value={userName}
        />{" "}
        <br />
      </div>
      <div>
        <label className={styles.label}>Age (Years)</label> <br />
        <input
          className={styles.form}
          type="number" // using "number" is BIG help for VALIDATION!!
          step={0.01}
          onChange={handleAge}
          value={age}
        />
      </div>
      <div>
        <input className={styles.button} type="submit" value="Add User" />
      </div>
    </form>
  );
};

export default UserForm;
