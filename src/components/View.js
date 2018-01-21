import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/view.css';
import Typing from 'react-typing';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios.get('/api/project')
      .then(res => {
        this.setState({ projects: res.data });
        console.log(this.state.projects);
      });
    }

  render(){
    return (
      <div class = 'view col-md-offset-1 col-md-10'>
      <div class="page-header">
          <p class = "app">Showcase <small class = "description">is a social media platform for people with awesome ideas, like you!</small></p>
      </div>
      <div class = "create col-md-offset-10">
        <Link to="/create" class = "btn btn-default" ><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span><span class = "add">Add Your Project</span></Link>
      </div>
        {this.state.projects.map(project =>
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src={project.filelink} alt="Preview" />
              <div class="caption">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p class = "col-md-offset-8"><Link to = {`/show/${project._id}`} class="btn btn-default"><span class = "detail">Detail</span></Link>&nbsp;</p>
              </div>
            </div>
          </div>
        )}
      </div>

    );
  }
}

export default View;