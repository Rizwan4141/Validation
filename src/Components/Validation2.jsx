import React, { useState } from "react";

const Validation2 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setFirstName("");
      setLastName("");
      alert("Submit form");
    }
  };
  const formValidation = () => {
    const firstNameErr = {};
    const lastNameErr = {};
    // let isValid = true;

    if (firstName.length < 4) {
      firstNameErr.firstNameShort = "First name is too short";
      // isValid = true;
    }
    if (firstName.length > 10) {
      firstNameErr.firstNameLong = "Fist name is too long";
      // isValid = true;
    }
    if (!lastName.includes("@gmail.com")) {
      lastNameErr.lastName123 = "Last namst must have @gmail.com ";
      // isValid = false;
    }
    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    // return isValid;
  };

  return (
    <form onSubmit={onSubmit}>
      <label>First Name : </label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <br />
      {Object.keys(firstNameErr).map((key) => {
        return <div style={{ color: "red" }}>{firstNameErr[key]}</div>;
      })}
      <label> Email : </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <br />
      {Object.keys(lastNameErr).map((key) => {
        return <div style={{ color: "red" }}>{lastNameErr[key]}</div>;
      })}
      <button type="submit"> Submit</button>
    </form>
  );
};

export default Validation2;
