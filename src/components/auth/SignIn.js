import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signIn} from '../../store/Actions/AuthAction'
import { Redirect } from 'react-router-dom'


export class SignIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   handleSubmit = (e, props) => {
      e.preventDefault()
      this.props.signIn({email: this.state.email, password: this.state.password})
  }
  render() {
    if(this.props.auth.uid) {
      return <Redirect to='/'/>
    }
    return (
      <div className="container">
      <form action="" onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={(e) => { this.setState({ email : e.target.value})}}/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => {this.setState({ password : e.target.value})}}/>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <div className="red-text center">
            {this.props.authError ? <p>{this.props.authError}</p> : null }
          </div>
        </div>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  auth: state.firebase.auth
})

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
