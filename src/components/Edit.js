import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from './Layout.js';
import '../style/edit.css';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    axios.get('/api/project/'+this.props.match.params.id)
      .then(res => {
        this.setState({ project: res.data });
        console.log(this.state.project);
      });
  }

  onChange = (e) => {
    const state = this.state.project
    state[e.target.name] = e.target.value;
    this.setState({project:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {user, id, type, collaborate, name, description, github, link, skills, filelink, comment, like } = this.state.project;

    axios.put('/api/project/'+this.props.match.params.id, {user, id, type, collaborate, name, description, github, link, skills, filelink, comment, like })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <Layout>
      <div class="container">
        <div class="panel panel-default col-md-12 edit">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Project
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.project._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Show Project Detail</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="type">Type:</label>
                <input type="text" class="form-control" name="isbn" value={this.state.project.type} onChange={this.onChange} placeholder="ISBN" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="title" value={this.state.project.name} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.project.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="description">Skills:</label>
                <input type="text" class="form-control" name="skills" value={this.state.project.skills} onChange={this.onChange} placeholder="Skills" />
              </div>
              <div class="form-group">
                <label for="filelink">Filelink:</label>
                <input type="text" class="form-control" name="filelink" value={this.state.project.filelink} onChange={this.onChange} placeholder="File Link" />
              </div>
              <div class="form-group">
                <label for="github">GitHub Link:</label>
                <input type="text" class="form-control" name="github" value={this.state.project.github} onChange={this.onChange} placeholder="GitHub Link" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </Layout>
    );
  }
}

export default Edit;
