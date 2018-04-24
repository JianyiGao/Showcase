import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/create.css';
import decode from 'jwt-decode';


class Add extends Component {
  constructor() {
    super();
    this.state = {
      user:'',
      id:'',
      type: '',
      collaborate: '',
      name: '',
      description: '',
      github: '',
      link: '',
      skills: '',
      filelink: '',
      comment:[{
        user_id: '',
        user: '',
        comment: ''
      }],
      like: 0
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {user, id, type, collaborate, name, description, github, link, skills, filelink, comment, like } = this.state;

    axios.post('/api/project',  {user, id, type, collaborate, name, description, github, link, skills, filelink, comment, like })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    var token = localStorage.getItem('jwtToken');
    var decoded = decode(token);
    const  {user, id, type, collaborate, name, description, github, link, skills, filelink, like } = this.state;
    // var token = localStorage.getItem('jwtToken');
    // var decoded_token = decode(token);
    this.state.user = decoded.username;
    this.state.id = decoded._id;
    return (
      <div class="container">
        <div class="panel panel-default main">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add a New Project
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Albert and Alberta's Personal Website" />
              </div>
              <div class="form-group">
                <label for="type">Type:</label>
                <input type="text" class="form-control" name="type" value={type} onChange={this.onChange} placeholder="Web Application" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={description} onChange={this.onChange} placeholder="This website has everything about Albert and Alberta!" />
              </div>
              <div class="form-group">
                <label for="github">GitHub Link:</label>
                <input type="text" class="form-control" name="github" value={github} onChange={this.onChange} placeholder="Link to your GitHub repository" />
              </div>
              <div class="form-group">
                <label for="skills">Skills:</label>
                <input type="text" class="form-control" name="skills" value={skills} onChange={this.onChange} placeholder="HTML CSS JavaScript ReactJS NodeJS" />
              </div>
              <div class="form-group">
                <label for="filelink">Add Visual:</label>
                <input type="text" class="form-control" name="filelink" value={filelink} onChange={this.onChange} placeholder="Screenshot" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
        </div>
    );
  }
}

export default Add;
