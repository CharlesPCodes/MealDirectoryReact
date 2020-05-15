import React, { Component }  from 'react';
import {Jumbotron} from 'reactstrap';
import { Link } from 'react-router-dom'



// Creates Header class that extends Component(React) so that we can easily call it on the main page
class Header extends Component {
       render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Welcome to Meal Directory!</h1>
                                {/* <h2>click on one of my favs or head to the list</h2> */}
                                <button><Link to="/contactus" >Submit a Meal</Link></button>

                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}
export default Header;