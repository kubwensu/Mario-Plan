import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {signUp} from '../../store/Actions/AuthAction'  

function SignUp(props) {
  const [password, setpassword] = useState("");

  const [email, setemail] = useState("");

  const [firstname, setfirstname] = useState("");

  const [lastname, setlastname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {email: email, password: password, firstName: firstname, lastName: lastname};
    props.signUp(payload)
    setpassword('')
    setemail('')
    setfirstname('')
    setlastname('')
  };
  if(props.auth.uid) {
    return <Redirect to='/'/>
  }
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit} className="white" id="myform">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>{" "}
        <div className="input-field">
          <label htmlFor="password">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => {
              setfirstname(e.target.value);
            }}
          />
        </div>{" "}
        <div className="input-field">
          <label htmlFor="password">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => {
              setlastname(e.target.value);
            }}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign up</button>
          <div className="red-text center">
            {props.authError ? <p>{props.authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  authError: state.auth.authError  
})

const mapDispatchToProps = dispatch => {
  return {
    signUp: (payload) => dispatch(signUp(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
