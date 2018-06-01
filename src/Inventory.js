import React from 'react';
import $ from 'jquery-ajax';

class Inventory extends React.Component{
    handleClick = () => {
        console.log("CLICK")
    }

    componentWillMount = () => {
        console.log('mounting!')
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/api/inventory`,
            data: {
              username: this.props.username,
            }
          })
          .then(res => {
              console.log('res from inventory', res)
              
          })

        

    }
    render(){
        const household = "Snowgill"
        const households = this.props.households.map( house => {
            console.log('house', house)
            return <li key={house._id}className="list-group-item" onClick={this.handleClick}>{house.name}</li>
        })
        return(
            <div id="inventory-page">
                <h2>Here is the inventory page!</h2>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Search for items:</h3>
                        <div className="form-group">
                            <label>Search for item</label>
                            <input className="form-control"type="text" placeholder="keyword"/>
                            <button className="btn btn-primary">Find item</button>
                            <div>
                                <p>Search results: </p>
                                <p>{this.props.username}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h3>Your households</h3>
                        <ul className="list-group">
                            {households}
                        </ul>
                    </div>
                    <div className="col-sm-6">
                            <h3>Add new item to household:{household}</h3>
                        <form id="addItemForm"className="selected">
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" className="form-control" name="title" placeholder="e.g. yoga mat" required/>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea type="text" className="form-control" placeholder="e.g. blue yoga mat, has some scratch marks"></textarea>
                            </div>
                            <div>
                                <label>Category:</label>
                                <select className="form-control">
                                    <option>Clothing</option>
                                    <option>Exercise</option>
                                    <option>Tools</option>
                                    <option>Kitchen</option>
                                    <option>Pet</option>
                                    <option>Custom</option>
                                </select>
                                <input className="form-control"type="text" placeholder="add custom category"></input>
                            </div>
                            <div className="form-group">
                                <label>Owner:</label>
                                <select className="form-control">
                                    <option>{this.props.username}</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Value:</label>
                                <input className="form-control"type="numbers" placeholder="estimated value, e.g. $18 "/>
                            </div>
                            <button type="submit" className="btn btn-primary">Save item to household</button>
                            <button className="btn btn-danger">Cancel</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p>Item List for {household}</p>
                        <div id="item-list" className="selected"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inventory; 