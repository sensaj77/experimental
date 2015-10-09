
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

var Toolkits = React.createClass({

    getDefaultProps: function() {
        return {
            fluid: false
        };
    },

    render: function() {
        return (
            <Grid {...this.props} id="grid-element">
            
                <Navbar inverse={ false } style={ { width:"1200px" } }>
                    <Nav>
                        <NavItem className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Front-End List</span>
                        </NavItem>
                        <NavItem className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Toolkits</span>
                        </NavItem>
                        <NavItem className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Frameworks</span>
                        </NavItem>
                        <NavItem className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Resources</span>
                        </NavItem>
                        <NavItem className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Learning</span>
                        </NavItem>
                        <NavItem href="#" style={ {    backgroundColor: 'black'} }>
                            <span style={ {    color: 'white'} }>Shop</span>
                        </NavItem>
                        <NavItem href="#" style={ {    marginLeft: '525px', backgroundColor: "blue"} }>
                            <span style={ {    color: 'red'} }>Why?</span>
                        </NavItem>
                    </Nav>
                </Navbar>
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
                            <Jumbotron id="moon-ground" > <h2 ><span style={ {    fontFamily: 'Helvetica'} } >Awesome tutorials, inspiring articles and snippets.</span><br></br>
                            <span>Best lists to learn front-end everyday.</span></h2> 
                                <p style={ {    marginLeft: '100px'} }></p>
                                <Input style={{width:"500px"}} 
                                        type="text"
                                       label="Subscribe to get front-end news every week"
                                       placeholder="Enter your email"
                                       buttonAfter={ <Button bsStyle="default" style={ {    backgroundColor: 'black', marginRight:"600px"} }>
                                                         <span style={ {    color: 'white'} }>Subscribe!</span>
                                                     </Button> }></Input>
                                </Jumbotron>
                                <h4><span >Online screencast</span></h4>
                                <div>
                                <ListGroup>
                                    <ListGroupItem className="list-group-item" href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/treehouse.png" alt="Mountain View"></img>
                                        <span className="span-text" >Treehouse</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span  style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/lynda.gif" alt="Mountain View"></img>
                                        <span className="span-text">Lynda.com</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span  style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img id="udemy-image"  src="assets/images/udemy.png" alt="Mountain View"></img>
                                        <span className="span-text">Udemy</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/skillshare2.jpg" alt="Mountain View"></img>
                                        <span className="span-text">Skillshare</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/tutsplus.jpg" alt="Mountain View"></img>
                                        <span className="span-text">Tuts+</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Learning</span>
                                        </Button>
                                    </ListGroupItem>
                                    <hr></hr>
                                    <h4><span >Online podcast</span></h4>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/shoptalk.jpg" alt="Mountain View"></img>
                                        <span className="span-text">ShopTalk</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Listening</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/upfront.png" alt="Mountain View"></img>
                                        <span className="span-text">Upfront</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Listening</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/fe5.png" alt="Mountain View"></img>
                                        <span className="span-text">Front-End Five</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Listening</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/ttl.png" alt="Mountain View"></img>
                                        <span className="span-text">TTL</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Listening</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/viewsources.jpg" alt="Mountain View"></img>
                                        <span className="span-text">Viewsources</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Listening</span>
                                        </Button>
                                    </ListGroupItem>
                                    <hr></hr>
                                    <h4><span >Web Design Blogs</span></h4>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/codrops.png" alt="Mountain View"></img>
                                        <span className="span-text">Codrops</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Reading</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/smashing.png" alt="Mountain View"></img>
                                        <span className="span-text">Smashing Magazine</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Reading</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/tricks.jpg" alt="Mountain View"></img>
                                        <span className="span-text">CSS-Tricks</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Reading</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/designmodo.png" alt="Mountain View"></img>
                                        <span className="span-text">Designmode</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Reading</span>
                                        </Button>
                                    </ListGroupItem>
                                    <ListGroupItem href="#" style={ {    width: '1000px'} }>
                                    <img className="company-image"  src="assets/images/codyhouse.jpg" alt="Mountain View"></img>
                                        <span className="span-text">CodyHouse</span>
                                        <Button className="learning-button" bsStyle="default" style={ {    marginLeft: '860px',    backgroundColor: 'red'} }>
                                            <span style={ {    color: 'grey'} }>Start Reading</span>
                                        </Button>
                                    </ListGroupItem>
                                </ListGroup>
                                </div>
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

module.exports = Toolkits;