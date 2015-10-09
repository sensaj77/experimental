var React = require('react');
var Router = require('react-router');

var Button = require('react-bootstrap').Button;

var ListGroup = require('react-bootstrap').ListGroup;

var ListGroupItem = require('react-bootstrap').ListGroupItem;

var Router = require('react-router');

var Locations = Router.Locations;

var Location = Router.Location;

var MainListGroup = React.createClass({
	render: function(){
		return(
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
				)
	}
});

module.exports = MainListGroup;