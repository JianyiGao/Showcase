import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
