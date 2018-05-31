import React, {Component} from 'react'
class Profile extends Component{
  addHousehold = (e) => {
    console.log('adding household!')
    console.log(e.target)
  }
  render(){
    const households = this.props.households.map( household => <li className="list-group-item">{household}</li>)
    if(!this.props.isAuthed){
    return(
      <div>
        <h2>Login to view your profile!</h2>
      </div>
    )} else {
      return(
        <div className="container">
          <h2>Welcome {this.props.username}!</h2>
          <div className="row">
            <div className="col-sm-6 householdDiv">
              <h3>Households</h3>
              <ul className="list-group">
                {households}
              </ul>
              <p>Add Household</p>
              <button onClick={this.addHousehold} data-toggle="modal" data-target="#addHouseholdModal" className="btn btn-light">+</button>
              <form className="addHouseForm">
                <label>Household name:</label>
                <input type="text" placeholder="household name"></input>
                <label>Members:</label>
                <input type="text" placeholder="Who is part of this household?"/>
              </form>
            </div>
            <div className="col-sm-6 householdDiv">
              <h3>My Inventory</h3>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Profile;