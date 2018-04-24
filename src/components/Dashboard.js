import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/dashboard.css';
import SearchInput, {createFilter} from 'react-search-input'
import decode from 'jwt-decode';
import Layout from './Layout.js';

const KEYS_TO_FILTERS = ['type', 'name', 'skills'];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchTerm: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  componentDidMount() {
    var token = localStorage.getItem('jwtToken');
    var decoded = decode(token);
    axios.get('/api/project/')
      .then(res => {
        const myProjects = res.data.filter(p => p.id === decoded._id);
        console.log(res.data);
        console.log(myProjects);
        this.setState({ projects: myProjects });
      });
    console.log(this.state.projects);

    }

  render(){
    var token = localStorage.getItem('jwtToken');
    const filtered = this.state.projects.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <Layout>
      <div class = 'view col-md-offset-1 col-md-10'>
      <h3>
        Your Projects
      </h3>
      <div class="bar">
        {!token &&
          <div class = "create">
            <Link to="/login" type = "button" class = "btn btn-default" >
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <span class = "add">Add Your Project</span></Link>
          </div>
        }
        {token &&
          <div class = "create">
            <Link to="/create" type = "button"  class = "btn btn-default" >
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <span class = "add">Add Your Project</span></Link>
          </div>
        }

      <SearchInput class="search-input form-control" onChange={this.searchUpdated} />
      </div>
      <div class="container">
        {filtered.map(project =>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src={project.filelink} alt="Preview" />
              <div class="caption">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p class = "col-md-offset-8">
                <Link to = {`/show/${project._id}`} class="btn btn-default">
                <span class = "detail">Detail</span></Link>&nbsp;</p>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
      </Layout>

    );
  }
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

export default Dashboard;
