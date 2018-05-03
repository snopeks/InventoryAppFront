import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h3 className="text-center">Login</h3>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;