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

class Header extends Component {

  render(){
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
    			<Nav pullRight>
    				<NavItem eventKey={1} href="#">
    					Login
    				</NavItem>
    				<NavItem eventKey={2} href="#">
    					Register
    				</NavItem>
    			</Nav>
    		</Navbar.Collapse>
    	</Navbar>
    );
  }
}

export default Header;
