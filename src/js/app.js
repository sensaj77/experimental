var React = require('react');
var Router = require('react-router');
var Grid = require('react-bootstrap').Grid;

var Row = require('react-bootstrap').Row;

var Col = require('react-bootstrap').Col;

var Button = require('react-bootstrap').Button;

var SplitButton = require('react-bootstrap').SplitButton;

var MenuItem = require('react-bootstrap').MenuItem;

var Input = require('react-bootstrap').Input;

var Navbar = require('react-bootstrap').Navbar;

var Nav = require('./ReactBootstrap').Nav;

var NavItem = require('react-bootstrap').NavItem;

var ListGroup = require('react-bootstrap').ListGroup;

var ListGroupItem = require('react-bootstrap').ListGroupItem;

var Jumbotron = require('react-bootstrap').Jumbotron;

var Router = require('react-router');

var Locations = Router.Locations;

var Location = Router.Location;

var NavigationBar = require('./components/navbar.js');

var JumbotronSubscribe = require('./components/jumbotron-subscribe.js');

var FeedbackList = require('./components/feedback-list.js');

var MainListGroup = require('./components/list-group.js');

var App = React.createClass({
	getDefaultProps: function() {
        return {
            fluid: false
        };
    },

    render: function() {
        return (
            <Grid {...this.props} id="grid-element">
            
                <NavigationBar />
                <Grid fluid={ true }>
                    <Row>
                        <Col xs={ 3 }
                             md={ 3 }
                             sm={ 3 }
                             lg={ 3 }></Col>
                        <Col style={{width:"1200px"}} 
                            xs={ 6 }
                             md={ 6 }
                             sm={ 6 }
                             lg={ 6 }>
                            <JumbotronSubscribe />
                                <h4><span >Online screencast</span></h4>
                                
                                <MainListGroup />
                            </Col>
                            <Col xs={ 3 }
                                 md={ 3 }
                                 sm={ 3 }
                                 lg={ 3 }></Col>
                        </Row>
                        <Row>
                            <Col xs={ 12 }
                                 md={ 12 }
                                 sm={ 12 }
                                 lg={ 12 }></Col>
                        </Row>
                    </Grid>
                    <Row>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 12 }>
                            <FeedbackList />
                            <p>
                                <span style={ {    marginLeft: '350px'} }>Proudly hosted by: © Mobilewebpro Total Dynamic Programming 2015</span>
                            </p>
                        </Col>
                    </Row>
            </Grid>
            );
    }
});

module.exports = App;