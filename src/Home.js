import React, { Component } from 'react'

class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Simple, satisfying inventory lists</h1>
            <p className="lead">Keep track of what you own with ease.</p>
          </div>
        </div>
        <div className="row">
            <div className="col-sm-4">
              <p>Selling point 1</p>
            </div>
            <div className="col-sm-4">
              <p>Selling point 2</p>
            </div>
            <div className="col-sm-4">
              <p>Selling point 3</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>A later paragraph about this service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat magna nec purus laoreet, non sagittis elit molestie. Sed magna augue, auctor id faucibus id, feugiat in enim. Donec quis mattis mauris, ac ornare ante. In hac habitasse platea dictumst. Phasellus venenatis congue enim non sagittis. Aenean efficitur auctor tellus non commodo. Nulla maximus enim hendrerit ex placerat, ac dapibus augue consequat. Vestibulum ut elit eget nunc ornare commodo a congue turpis. Nunc eu gravida quam. Proin fermentum risus et mollis aliquam.</p>
            </div>
          </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home