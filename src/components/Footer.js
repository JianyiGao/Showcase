import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Grid,
  Nav,
  NavItem
} from 'react-bootstrap';
import '../style/footer.css';

function Footer() {
  return (
    <footer>
        <div className = "text-center small">
          Copyright &copy; 2018 Showcase
        </div>
        <div className = "text-center small">
          Developed with &#9829; by Jianyi Gao
        </div>
    </footer>
  )
}

export default Footer;
