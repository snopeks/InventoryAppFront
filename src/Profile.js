import React, {Component} from 'react'
import $ from 'jquery-ajax';

class Profile extends Component{
  state = {
    newHouseName: '',

  }
  handleHouseNameChange = (e) =>{
    console.log('setting the house name!')
    this.setState({newHouseName: e.target.value})
  }
  componentWillMount = () => {
    console.log('mounting profile page!')
    console.log("length of households", this.props.households.length)
    if(this.props.isAuthed && this.props.households.length === 0){
      $.ajax({
        method: 'GET',
        url: `http://localhost:3000/api/users/${this.props.username}`,
      })
      .then(res => {
          console.log('returned user', res)
          // this.setState({households: res[0].households})
          this.props.getHouseholds(res[0].households)
      })
    } else {
      console.log('login please')
      console.log("isAuthed", this.props.isAuthed)
      console.log("this.props.households", this.props.households)


    }
  }

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
      //take a copy of current app household state
      const households = this.props.households;
      //add new house to copy of app state
      households.push({_id: res._id, name: res.name})
      //run function to add new house to app state
      this.props.getHouseholds(households)
    })
    e.currentTarget.reset(); 
  }
  render(){
    const houseNames = this.props.households.map(household =>{ 
      return <li key={household.name}className="list-group-item"><p>{household.name}</p></li>
    })
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
              <form className="addHouseForm">
                <div className="form-group">
                  <label>New Item:</label>
                  <input type="text"className="form-control" placeholder="new item "></input>
                </div>
                <button className="btn btn-dark">Add Item</button>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Profile;

