import React, {Component} from 'react'
import $ from 'jquery-ajax';

class Profile extends Component{
  state = {
    newHouseName: '',
    households: []
  }
  handleHouseNameChange = (e) =>{
    console.log('setting the house name!')
    this.setState({newHouseName: e.target.value})
  }
  componentWillMount = () => {
    console.log('mounting profile page!')
    if(this.props.username){
      $.ajax({
        method: 'GET',
        url: `http://localhost:3000/api/users/${this.props.username}`,
      })
      .then(res => {
          console.log('returned user', res)
          this.setState({households: res[0].households})
      })
    } else {
      console.log('login to get a user back')
    }
  }
  // componentDidUpdate = () => {
  //   console.log('it updated!')
  //   $.ajax({
  //     method: "GET",
  //     url:`http://localhost:3000/api/users/${this.props.username}`
  //   })
  //   .then(res => {
  //     console.log(`updated user:`, res)
  //     this.setState({households: res.households})
  //   })
  // }

  addHousehold = (e) => {
    e.preventDefault();
    console.log('adding house!')
    $.ajax({
      method: "POST",
      url: `http://localhost:3000/api/households`,
      data: {
        username: this.props.username,
        name: this.state.newHouseName
      }
    })
    .then(res => {
      console.log('here is the returned house', res)
      //take a copy of state to add the new house to state
      const households = this.state.households;
      households.push(res)
      this.setState({households})
    })
    e.currentTarget.reset(); 
  }
  render(){
    const houseNames = this.state.households.map(household =>{ 
      return <li key={household.name}className="list-group-item"><p>{household.name}</p></li>
    })
    console.log(houseNames)
    if(!this.props.isAuthed){
    return(
      <div>
        <h2>Login to view your profile!</h2>
      </div>
    )} else {
      return(
        <div className="container">
          <h2>Welcome, {this.props.username}!</h2>
          <div className="row">
            <div className="col-sm-6 householdDiv">
              <h3>My Households</h3>
              <ul className="list-group">
              {houseNames}
              </ul>
                <h3>Add Household:</h3>
              <form className="addHouseForm" onSubmit={this.addHousehold}>
                <div className="form-group">
                  <label>Household name:</label>
                  <input className="form-control" type="text" onChange={this.handleHouseNameChange} name="name" placeholder="household name"></input>
                </div>
                  <button className="btn btn-light">Add Household</button>
              </form>
            </div>
            <div className="col-sm-6 householdDiv">
              <h3>Inventory QuickView</h3>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Profile;

