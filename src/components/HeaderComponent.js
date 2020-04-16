import React, { Component }  from 'react';
import {Jumbotron} from 'reactstrap';



// Creates Header class that extends Component(React) so that we can easily call it on the main page
class Header extends Component {
       render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Welcome to Meal timers!</h1>
                                {/* <h2>click on one of my favs or head to the list</h2> */}
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}
export default Header;