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
      householdArray: [],
      id:'', 
      isAuthenticated: false,
    };
    console.log(this.state.path)
    console.log("STATE: ", this.state.id , this.state.isAuthenticated);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit= this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);


  }
  handleLoginSubmit(username, password, e){
    e.preventDefault();
    console.log("handling login submit")
    console.log(username)
    console.log(password)
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
      this.setState({isAuthenticated: true, username: res.username, id: res._id, householdArray: res.households});
      this.props.history.push('/profile');
    }, err => {
      console.log("we hit an error with login!")
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
      url: `localhost:3001/signup`,
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
    console.log("logging out!");
    this.setState({isAuthenticated: false})
  }

    render() {
      console.log("IS AUTHED in layout", this.state.isAuthenticated)
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
                <Route path='/profile' render={() => <Profile username={this.state.username} households={this.state.householdArray} isAuthed={this.state.isAuthenticated}/> } />
                <Route path="/inventory" render={()=> <Inventory username={this.state.username} households={this.state.householdArray}/>} />
                <Route path='/error' component={ErrorPage} />
              </Switch>
              </main>
              <Footer />
          </div>
        )

    }
  }

export default withRouter(App);



//
