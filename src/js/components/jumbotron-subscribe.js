var React = require('react');
var Router = require('react-router');

var Button = require('react-bootstrap').Button;

var MenuItem = require('react-bootstrap').MenuItem;

var Input = require('react-bootstrap').Input;

var Jumbotron = require('react-bootstrap').Jumbotron;

var Router = require('react-router');

var Locations = Router.Locations;

var Location = Router.Location;


var JumbotronSubscribe = React.createClass({
	render: function(){
		return(
				<Jumbotron id="moon-ground" > 
					<h2 ><span style={ {    fontFamily: 'Helvetica', color: 'white'} } >Awesome tutorials, inspiring articles and snippets.</span><br></br>
	                <span style={ {    color: 'white'} }>Best lists to learn front-end everyday.</span></h2> 
	                <p style={ {    marginLeft: '100px'} }></p>
	                <Input style={{width:"500px"}} 
	                	type="text"
	                	label="Subscribe to get front-end news every week"
	                    placeholder="Enter your email"
	                    buttonAfter={ <Button bsStyle="default" style={ {    backgroundColor: 'black', marginRight:"600px"} }>
	                <span style={ {    color: 'white'} }>Subscribe!</span>
	                </Button> }></Input>
	             </Jumbotron>
				)
	}
});

module.exports = JumbotronSubscribe;