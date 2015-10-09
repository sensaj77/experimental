
'use strict';

// require('../../src/assets/css/bootstrap.css');

// require('../../src/assets/css/font-awesome.min.css');

// require('../../src/assets/js/bootstrap.js');

// require('../../src/libs/bootstrap3-editable/css/bootstrap-editable.css');

// require('../../src/libs/bootstrap3-editable/js/bootstrap-editable.js');

var React = require('react');

var Grid = require('react-bootstrap').Grid;

var Row = require('react-bootstrap').Row;

var Col = require('react-bootstrap').Col;

var Button = require('react-bootstrap').Button;

var Router = require('react-router');

var Locations = Router.Locations;

var Location = Router.Location;

var NavigationBar = require('./components/navbar.js');

var JumbotronSubscribe = require('./components/jumbotron-subscribe.js');

var FeedbackList = require('./components/feedback-list.js');

var MainListGroup = require('./components/list-group.js');

var Resources = React.createClass({
    getDefaultProps: function() {
        return {
            fluid: false,
            randomText: "Jan Kochanowski z Czarnolasu"
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
                                {this.props.randomText}
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

//module.exports = Main;

React.render(<Resources />, document.getElementById('example'));
