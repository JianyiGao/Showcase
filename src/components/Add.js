import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/create.css';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      type: '',
      collaborate: '',
      name: '',
      description: '',
      github: '',
      link: '',
      skills: '',
      filelink: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { type, collaborate, name, description, github, link, skills, filelink } = this.state;

    axios.post('/api/project', { type, name, collaborate, description, github, link, skills, filelink })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { type, collaborate, name, description, github, link, skills, filelink } = this.state;

    return (
      <div class = "col-md-offset-1 col-md-10">
        <div class = "new">Add a New Project</div>
        <div class = "col-md-offset-3 sub">
          Looking for hackers? Check Collborate for your project!
        </div>
        <form onSubmit = {this.onSubmit}>
          <div class = "input-group">
            <span class ="input-group-addon" id="name">Name</span>
            <input type = "text" class = "form-control" name = "name" value = {name} onChange = {this.onChange} placeHolder = "Albert and Alberta's Personal Website" />
          </div>
          <div class = "input-group">
            <span class ="input-group-addon" id="name">Collborate</span>
            <input type = "text" class = "form-control" name = "name" value = {collaborate} onChange = {this.onChange} placeHolder = "Gator" />
          </div>
          <div class = "input-group">
            <span class ="input-group-addon" id="type">Type</span>
            <input type = "text" class = "form-control" name = "type" value = {type} onChange = {this.onChange} placeHolder = "Web Application" />
          </div>
          <div class = "input-group">
            <span class ="input-group-addon" id="description">Description</span>
            <input type = "text" class = "form-control" name = "description" value = {description} onChange = {this.onChange} placeHolder = "This website has everything about Albert and Alberta!" />
          </div>
          <div class = "input-group">
            <span class = "input-group-addon" id = "skills">Skills</span>
            <input type = "text" class = "form-control" name = "skills" value = {skills} onChange = {this.onChange} placeHolder = "HTML CSS JavaScript ReactJS NodeJS" />
          </div>
          <div class = "input-group">
            <span class = "input-group-addon" id = "filelink">Add Visual</span>
            <input type = "text" class = "form-control" name = "filelink" value = {filelink} onChange = {this.onChange} placeHolder = "Selfie" />
          </div>
          <button type="submit" class="btn btn-default"><span class = "submit">Submit</span></button>
        </form>
      </div>
    );
  }
}

export default Add;
