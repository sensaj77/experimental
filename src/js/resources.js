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

var SplitButton = require('react-bootstrap').SplitButton;

var MenuItem = require('react-bootstrap').MenuItem;

var Input = require('react-bootstrap').Input;

var Navbar = require('react-bootstrap').Navbar;

var Nav = require('./ReactBootstrap').Nav;

var NavItem = require('react-bootstrap').NavItem;

var ListGroup = require('react-bootstrap').ListGroup;

var ListGroupItem = require('react-bootstrap').ListGroupItem;

var Jumbotron = require('react-bootstrap').Jumbotron;

var Resources = React.createClass({

    getDefaultProps: function() {
        return {
            fluid: false
        };
    },

    render: function() {
        return (
            <Grid {...this.props}>
                
                <Grid fluid={ true }>
                    <Row>
                        <Col xs={ 3 }
                             md={ 3 }
                             sm={ 3 }
                             lg={ 3 }></Col>
                        <Col xs={ 6 }
                             md={ 6 }
                             sm={ 6 }
                             lg={ 6 }>
                            <Jumbotron > <h2 ><span style={ {    fontFamily: 'Helvetica'} } >Awesome tutorials, inspiring articles and snippets.</span><br></br>
                            <span>Best lists to learn front-end everyday.</span></h2> 
                                <p style={ {    marginLeft: '100px'} }></p>
                                <Input type="text"
                                       label="Subscribe to get front-end news every week"
                                       placeholder="Enter your email"
                                       buttonAfter={ <Button bsStyle="default" style={ {    backgroundColor: 'black'} }>
                                                         <span style={ {    color: 'white'} }>Subscribe!</span>
                                                     </Button> }></Input>
                                </Jumbotron>
                                <h4><span >Online screencast</span></h4>
                                <ListGroup>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey', position:"relative", bottom:"10px"} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <hr></hr>
                                    <h4><span >Online podcast</span></h4>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <hr></hr>
                                    <h4><span >Web Design Blogs</span></h4>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '800px'} }>
                                        <span>Treehouse</span>
                                        <Button bsStyle="default" style={ {    marginLeft: '660px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                </ListGroup>
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
                            <SplitButton title="Feedback" dropup={ true }>
                                <MenuItem eventKey="1">
                                    <span>Dropdown link</span>
                                </MenuItem>
                                <MenuItem eventKey="2">
                                    <span>Dropdown link</span>
                                </MenuItem>
                                <MenuItem divider={ true }>
                                    <span>Dropdown link</span>
                                </MenuItem>
                                <MenuItem eventKey="3">
                                    <span>Dropdown link</span>
                                </MenuItem>
                            </SplitButton>
                            <p>
                                <span style={ {    marginLeft: '350px'} }>Proudly hosted by: © Mobilewebpro Total Dynamic Programming 2015</span>
                            </p>
                        </Col>
                    </Row>
            </Grid>
            );
    }
});

module.exports = Resources;
