var React = require('react');
var Router = require('react-router');
var Grid = require('react-bootstrap').Grid;

var Row = require('react-bootstrap').Row;

var Col = require('react-bootstrap').Col;

var Button = require('react-bootstrap').Button;

var SplitButton = require('react-bootstrap').SplitButton;

var MenuItem = require('react-bootstrap').MenuItem;

var Router = require('react-router');

var Input = require('react-bootstrap').Input;

var Locations = Router.Locations;

var Location = Router.Location;


var FeedbacklList = React.createClass({
	render: function(){
		return(
				<SplitButton title="Feedback" dropup={ true }>
								<span>Let me know what you think about this page</span>
                                <MenuItem eventKey="1">
                                   <Input style={{  }} 
	                					type="text"
	                    				placeholder="Your name">
	                    			</Input>
                                </MenuItem>
                                <MenuItem eventKey="2">
                                    <Input style={{  }} 
	                					type="text"
	                    				placeholder="Your email">
	                    			</Input>
                                </MenuItem>
                                <MenuItem divider={ true }>
                                    <span>Dropdown link</span>
                                </MenuItem>
                                <MenuItem eventKey="3">
                                    <textarea type="text" placeholder="Your message" style={{display:"block"}}></textarea>
                                </MenuItem>
                                <Button bsStyle="default" style={ {    backgroundColor: 'black', marginLeft:"80px"} }>
	                				<span style={ {    color: 'white'} }>Send message</span>
	                			</Button>
                            </SplitButton>
				)
	}
});

module.exports = FeedbacklList;