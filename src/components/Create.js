import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Add from './Add.js';
import Layout from './Layout.js';

class Create extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Add />
        </Layout>
      </div>
    );
  }
}

export default Create;
