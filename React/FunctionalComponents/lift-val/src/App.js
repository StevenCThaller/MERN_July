import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPw: ""
  });

  const [errors, setErrors] = useState({
    firstName: "First name must be minimum 2 characters in length.",
    lastName: "Last name must be minimum 3 characters in length.",
    email: "Invalid email.",
    password: "Password must be at least 8 characters long."
  });

  const [submitted, setSubmitted] = useState(false);

  const changeHandler = e => {
    console.log(e.target.name+": "+e.target.value);
    const curUser = { 
      ...user, 
      [e.target.name]: e.target.value
    }
    

    
    validate(curUser);
    setUser(curUser);
  }

  const validate = (curUser) => {
    const {...curErrors} = errors;

    if(curUser.firstName.length < 2){
      curErrors.firstName = "First name must be minimum 2 characters in length.";
    }
    else{
      curErrors.firstName = "";
    }

    if(curUser.lastName.length < 3){
      curErrors.lastName = "Last name must be minimum 3 characters in length."
    }
    else {
      curErrors.lastName = "";
    }

    if(curUser.email.length < 7){
      curErrors.email = "Invalid email.";
    }
    else {
      curErrors.email = "";
    }

    if(curUser.password.length < 8) {
      curErrors.password = "Password must be at least 8 characters long.";
    }
    else if(curUser.password != curUser.confirmPw) {
      curErrors.password = "Passwords do not match.";
    }
    else {
      curErrors.password = "";
    }
    console.log(curErrors);
    setErrors(curErrors);
  }

  return (
    <div>
      <div className="row">
        <h1>Form</h1>
      </div>
      <div className="col-sm-8">
        <Form 
          user={ user }
          changeHandler={ changeHandler }
          errors={ errors }
          submitted={ submitted }
          setSubmitted={ setSubmitted }
        />
      </div>
    </div>
  );
}

export default App;
