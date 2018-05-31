import React, { Component } from 'react'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }
  handleLoginSubmit = (e) => {
    e.preventDefault(); 
    console.log('in login fn!')
    this.props.login(this.state.username, this.state.password, e)
  }




  render(){
    return(
      <div className="row">
        <div className="col-sm-2">
          <p>Side column</p>
        </div>
        <div className="col-sm-8">
          <h3 className="text-center">Login</h3>
          <form onSubmit={this.handleLoginSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input onChange={this.handleUsernameChange}type="text" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" required/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={this.handlePasswordChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-sm-2">
          <p>Side text</p>
        </div>
      </div>
    )
  }
}

export default Login;