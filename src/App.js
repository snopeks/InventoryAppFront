import React, { Component } from 'react';
import $ from 'jquery-ajax';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Footer from './Footer';
import Header from './Header';
import ErrorPage from './Error';
import Inventory from './Inventory';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      id:'', 
      isAuthenticated: false,
      households: []
    };
    console.log("isAuthed?", this.state.isAuthenticated)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit= this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.getHouseholds = this.getHouseholds.bind(this);
  }

//I want to make two ajax requests: 1st to login and 
//2nd to get all the populated data from the user and store in state
  handleLoginSubmit(username, password, e){
    e.preventDefault();
    console.log("handling login submit")
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/login`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      console.log('res is ', res);
      this.setState({isAuthenticated: true, username: res.username, id: res._id})
      this.props.history.push('/profile');
    }, err => {
      console.log("we hit an error sending the last data??")
      console.log(err);
      this.props.history.push('/error')
    });
  }
  handleSignupSubmit(username, password, e){
    e.preventDefault();
    console.log("handling Signup submit")
    console.log(username)
    console.log(password)
    //if password and confirm password match, run the fn
    //try bootstrap validator
    $.ajax({
      method: 'POST',
      url: `https://localhost:3000/signup`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      console.log('res is ', res);
      console.log("this is username", res.username)
      this.setState({isAuthenticated: true, username: res.username});
      this.props.history.push('/profile');
    }, err => {
      console.log("we hit an error with signup!")
      console.log(err);
    });
  }
  handleLogout(){
    //need to work on this function
    console.log("logging out!");
    this.setState({isAuthenticated: false})
    // this.props.history.push('/')
  }
  getHouseholds = (households) => {
    console.log(households)
    this.setState({ households})
  }
    render() {
        return (
          <div>
              <Header
                isAuthed={this.state.isAuthenticated}
                logout={this.handleLogout}
              />
              <main className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/about' component={About} />
                <Route path='/signup' render={() => <Signup signup={this.handleSignupSubmit}/> }/>
                <Route path='/login' render={() => <Login login={this.handleLoginSubmit}/>}/>
                <Route path='/profile' render={() => <Profile households={this.state.households} getHouseholds={this.getHouseholds} username={this.state.username} isAuthed={this.state.isAuthenticated}/> } />
                <Route path="/inventory" render={()=> <Inventory households={this.state.households} username={this.state.username}/>} />
                <Route path='/error' component={ErrorPage} />
              </Switch>
              </main>
              <Footer />
          </div>
        )

    }
  }

export default withRouter(App);
