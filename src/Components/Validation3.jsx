import React, { useState, useEffect } from "react";

function Validation3() {
  const initialValue = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^/s@]+@[^/s@]+\.[^s@]{2,}$/i;
    if (!values.username) {
      errors.username = "username is requrired !";
    }
    if (!values.email) {
      errors.email = "email is requrired !";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not valid email format";
    }
    if (!values.password) {
      errors.password = "password is requrired !";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more then 4 character";
    } else if (values.password.length > 10) {
      errors.password =
        "Password cannot exceed more  must be more then 10 character";
      return errors;
    }
  };
  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit?(
      <div>singned in successfully</div>
  ):(
      <pre>{JSON.stringify(formValues)}</pre>
  )}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <label>user Name</label> <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
        <p>{formErrors.username}</p>
        <br />
        <label> Email</label> <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
        <br />
        <label> Password</label> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Validation3;
