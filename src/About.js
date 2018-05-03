import React, {Component} from 'react'

class About extends Component {
  render(){
    return(
      <div className="about">
        <div className="row">
          <div className="col-sm-12">
            <h2>Your space, your stuff, you decide.</h2>
            <h3>When in doubt, make a list!</h3>
          </div>
        </div>
          <div className='row'>
              <div className="col-sm-12 text"><p>Planning a big move? Keep track of what to sell, pack and transport. Share these lists with your family and moving company</p></div>
              <div className="col-sm-12 text"><p>Perfect for organizing spring cleaning, or clearing out your basement, home office, etc </p></div>
          </div>
          <div className="row">
              <div className="col-sm-12 text"><p>Coordinating an event? Easily make a shopping list and keep on schedule.</p></div>
              <div className="col-sm-12 text"><p>Small business owners can track their inventory and keep their office organized.</p></div>
          </div>
          <div className="row">
              <div className="col-sm-12 text"><p>Planning a wedding? Create a list of gifts received and track who needs a thank-you card</p></div>
              <div className="col-sm-12 text"><p>Great for folks living with roommates and remembering who really owns the best frying pan</p></div>
          </div>
      </div>
    )
  }
}

export default About;