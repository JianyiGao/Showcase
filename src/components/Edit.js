import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    const { type, name, description, github, link, skills, filelink } = this.state.project;

    axios.put('/api/project/'+this.props.match.params.id, { type, name, description, github, link, skills, filelink })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT PROJECT WILL CHANGE LATER
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.project._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              // <div class="form-group">
              //   <label for="isbn">ISBN:</label>
              //   <input type="text" class="form-control" name="isbn" value={this.state.project.type} onChange={this.onChange} placeholder="ISBN" />
              // </div>
              // <div class="form-group">
              //   <label for="title">Title:</label>
              //   <input type="text" class="form-control" name="title" value={this.state.project.title} onChange={this.onChange} placeholder="Title" />
              // </div>
              // <div class="form-group">
              //   <label for="author">Author:</label>
              //   <input type="text" class="form-control" name="author" value={this.state.book.author} onChange={this.onChange} placeholder="Author" />
              // </div>
              // <div class="form-group">
              //   <label for="description">Description:</label>
              //   <input type="text" class="form-control" name="description" value={this.state.book.description} onChange={this.onChange} placeholder="Description" />
              // </div>
              // <div class="form-group">
              //   <label for="published_date">Published Date:</label>
              //   <input type="number" class="form-control" name="published_year" value={this.state.book.published_year} onChange={this.onChange} placeholder="Published Year" />
              // </div>
              // <div class="form-group">
              //   <label for="publisher">Publisher:</label>
              //   <input type="text" class="form-control" name="publisher" value={this.state.book.publisher} onChange={this.onChange} placeholder="Publisher" />
              // </div>
              // <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
