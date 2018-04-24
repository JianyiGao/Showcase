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
import '../style/header.css';

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
    			{token &&
            <Nav>
      				<NavItem eventKey={1} href="/create">
      					Create
      				</NavItem>
    			   </Nav>
          }
          {!token &&
            <Nav>
      				<NavItem eventKey={1} href="/login">
      					Create
      				</NavItem>
    			   </Nav>
          }

            {!localStorage.getItem('jwtToken') &&
              <Nav pullRight>
                <NavItem eventKey={1} class="second" href = "/login">Login</NavItem>
                <NavItem eventKey={2} class="right" href = "/register">Register</NavItem>
              </Nav>
            }
            {localStorage.getItem('jwtToken') &&
            	<Nav pullRight>
                <NavItem eventKey={1}  href="/dashboard">{decoded_token.username}</NavItem>
                <NavItem eventKey={2}  onClick={this.logout} href = "/">Logout</NavItem>
              </Nav>
            }
    		</Navbar.Collapse>
    	</Navbar>
    );
  }
}

export default Header;
