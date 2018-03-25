import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  Nav,
  MenuItem,
  NavItem,
  NavDropdown,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import decode from 'jwt-decode';

class Header extends Component {

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render(){
    var token = localStorage.getItem('jwtToken');
    if (token)
      var decoded_token = decode(token);
    return (
      <Navbar collapseOnSelect>
    		<Navbar.Header>
    			<Navbar.Brand>
    				<a href="/">Showcase</a>
    			</Navbar.Brand>
    			<Navbar.Toggle />
    		</Navbar.Header>
    		<Navbar.Collapse>
    			<Nav>
    				<NavItem eventKey={1} href="/create">
    					Create
    				</NavItem>
    				<NavItem eventKey={2} href="#">
    					CaseSuberb
    				</NavItem>
    			</Nav>
          <Navbar.Form pullLeft>
  				<FormGroup>
  					<FormControl type="text" placeholder="Search" />
  				</FormGroup>{' '}
  				<Button type="submit">Submit</Button>
  			</Navbar.Form>
            {!localStorage.getItem('jwtToken') &&
              <Nav pullRight>
                <NavItem eventKey={1}  href = "/login">Login</NavItem>
                <NavItem eventKey={2}  href = "/register">Register</NavItem>
              </Nav>
            }
            {localStorage.getItem('jwtToken') &&
            	<Nav pullRight>
                <NavItem eventKey={1}>{decoded_token.username}</NavItem>
                <NavItem eventKey={2}  onClick={this.logout}>Logout</NavItem>
              </Nav>
            }
    		</Navbar.Collapse>
    	</Navbar>
    );
  }
}

export default Header;
