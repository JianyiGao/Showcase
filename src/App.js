import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout.js';
import View from './components/View.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get('/api/project')
      .then(res => {
        this.setState({ projects: res.data });
        console.log(this.state.projects);
      });
  }

  render() {
    return (
      <div>
        <Layout>
          <View />
        </Layout>
      </div>
    );
  }
}

export default App;
