import React from "react";
import "../components/Table/Table.css"
import {MdClose} from "react-icons/md"

const FormTable = ({handleSubmit,handleOnchange,handleclose,rest}) => {
  return (
    <div className="addEmployee" style={{ paddingTop: "10%" }}>
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}>
          <MdClose />
        </div>
        <label htmlFor="FullName">FullName :</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={handleOnchange}
          value={rest.fullName}
        />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleOnchange} value={rest.email}/>

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" onChange={handleOnchange} value={rest.age} />

        <label htmlFor="dob">DOB:</label>
        <input type="date" id="dob" name="dob" onChange={handleOnchange} value={rest.dob}/>

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={handleOnchange}
          value={rest.country}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormTable;
