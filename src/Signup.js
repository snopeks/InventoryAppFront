import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component{
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: ''
    }
    this.formSubmit = this.formSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.username, this.state.password)
    console.log(this.props);
    this.props.signup(this.state.username, this.state.password, e)

  }
  handlePasswordChange = e => {
    console.log(e.target.value);
    this.setState({password: e.target.value})
  }
  handleUsernameChange = e => {
    // console.log(e);
    console.log(e.target.value)
    this.setState({username: e.target.value})
  }
  render(){
    return(
      <div>
          <form onSubmit={this.formSubmit}>
            <h3 className="text-center">Sign Up</h3>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" onChange={this.handleUsernameChange} id="username" name="username" placeholder="Choose username" required/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="password1" placeholder="Choose a password" required/>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" onChange={this.handlePasswordChange} id="password2" placeholder="Confirm your password" required/>
            </div>
            <button type="submit">Submit</button>
            <button><Link to='/'>Cancel</Link></button>
          </form>
      </div>
    )
  }
}

export default Signup;