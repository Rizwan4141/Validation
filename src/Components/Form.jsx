import React from "react";

const Form = () => {
  const handle = (e) => {
    e.preventDefault();
    alert("submit");
  };
  return (
    <div>
      <form onSubmit={handle}>
        <label>name</label>
        <input type="text" /> <br />
        <label>pass</label>
        <input type="text" /> <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
