var React = require('react');
var Router = require('react-router');

var Navbar = require('react-bootstrap').Navbar;

var Nav = require('../ReactBootstrap').Nav;

var NavItem = require('react-bootstrap').NavItem;

var Router = require('react-router');

var Locations = Router.Locations;

var Location = Router.Location;


var NavigationBar = React.createClass({
	handleSelect: function (selectedKey) {
  		alert('selected ' + selectedKey);
	},
	render: function(){
		return(
			<Navbar inverse={ false } style={ { width:"1150px",marginLeft:"20px" } } >
                    <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
                        <NavItem eventKey={2} title="Front-End List" className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Front-End List</span>
                        </NavItem>
                        <NavItem eventKey={3} title="Toolkits" className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Toolkits</span>
                        </NavItem>
                        <NavItem eventKey={4} title="Frameworks" className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Frameworks</span>
                        </NavItem>
                        <NavItem eventKey={5} title="Resources" className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Resources</span>
                        </NavItem>
                        <NavItem eventKey={6} title="Learning" className="nav-bar-item" href="#" >
                            <span style={ {    color: 'black'} }>Learning</span>
                        </NavItem>
                        <NavItem eventKey={7} title="Shops" href="#" style={ {    backgroundColor: 'black'} }>
                            <span style={ {    color: 'white'} }>Shop</span>
                        </NavItem>
                        <NavItem eventKey={8} title="Why?" href="#" style={ {    marginLeft: '525px', backgroundColor: "blue"} }>
                            <span style={ {    color: 'red'} }>Why?</span>
                        </NavItem>
                    </Nav>
                </Navbar>
			)
	}
});

module.exports = NavigationBar;