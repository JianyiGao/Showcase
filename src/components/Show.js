import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from './Layout.js';
import decode from 'jwt-decode';
import '../style/show.css';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: {},
      newComment:{
        user_id:'',
        username:'',
        comment:'',
        updated_date: { type: Date, default: Date.now }
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/project/'+this.props.match.params.id)
      .then(res => {
        this.setState({ project: res.data });
        console.log(this.state.project);
      });
  }

  onChange = (e) => {
    const state = this.state.newComment;
    state[e.target.name] = e.target.value;
    this.setState({newComment:state});
    console.log("object: " + this.state.newComment);
    console.log("comment: " + this.state.newComment.comment);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {user_id, username, comment} = this.state.newComment;
    const {user, id, type, collaborate, name, description, github, link, skills, filelink, comments, like } = this.state.project;

    var token = localStorage.getItem('jwtToken');
    var decoded = decode(token);
    console.log(this.state.newComment)
    if (this.state.newComment.comment && token){
      this.state.newComment.user_id = decoded._id;
      this.state.newComment.username = decoded.username;
      this.state.project.comments.push(this.state.newComment);
    }
    console.log(this.state.newComment);
    console.log(this.state.project);

    axios.put('/api/project/'+this.props.match.params.id, {user, id, type, collaborate, name, description, github, link, skills, filelink, comments, like })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/project/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  handleClick = () => {
   let curProject = Object.assign({}, this.state.project);
   curProject.like = curProject.like + 1;
   console.log("newCount: " + curProject.like);
   this.setState({project:curProject});
   console.log("New like count: " + this.state.project.like);

   const {user, id, type, collaborate, name, description, github, link, skills, filelink, comments, like } = this.state.project;
   axios.put('/api/project/'+this.props.match.params.id, {user, id, type, collaborate, name, description, github, link, skills, filelink, comments, like })
     .then((result) => {
       this.props.history.push("/show/"+this.props.match.params.id)
     });
 }

  render() {
    var token = localStorage.getItem('jwtToken');
    const comments = this.state.project.comments;
    console.log(comments);
    return (
      <div class = "show">
        <Layout>
        <div class="col-md-offset-1">
          <h3>
            {this.state.project.name}
          </h3>
          <div class = "col-md-4 picture">
            <img src = {this.state.project.filelink} alt = "Picture" id="demo" />
          </div>
          <div class = "detail col-md-7">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">Description</h3>
              </div>
              <div class="panel-body">
                {this.state.project.description}
              </div>
              <div class="panel-heading">
                <h3 class="panel-title">Github Link</h3>
              </div>
              <div class="panel-body">
                {this.state.project.github}
              </div>
              <div class="panel-heading">
                <h3 class="panel-title">Skills</h3>
              </div>
              <div class="panel-body">
                {this.state.project.skills}
              </div>
              <div class="panel-heading">
                <h3 class="panel-title">Project Link</h3>
              </div>
              <div class="panel-body">
                {this.state.project.link}
              </div>
            </div>
          </div>
          {token &&
            <div class=" ol-md-offset-1 col-md-4">
                <Link to={`/edit/${this.state.project._id}`} class="btn btn-success">Edit</Link>&nbsp;
                <button onClick={this.delete.bind(this, this.state.project._id)} class="btn btn-danger">Delete</button>
            </div>
          }
            {token &&
              <div class="col-md-7 like">
                <button class="btn btn-default" onClick={this.handleClick}>{this.state.project.like} Likes</button>
                <form onSubmit = {this.onSubmit} class = "comment">
                  <div class = "input-group">
                    <span class ="input-group-addon" id="comment">Comment</span>
                    <input type = "text" class = "form-control" name = "comment" value = {this.state.newComment.comment} onChange = {this.onChange} placeHolder = "This is a cool project!" />
                  </div>
                  <button class="btn btn-default">Submit</button>
                </form>
              </div>
            }
            {!token &&
              <span class = "add col-md-7">Please <Link to="/login" >login</Link> to comment and like!</span>
            }
        </div>
            <div class="col-md-offset-5 col-md-6 comment_space panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Comments</h3>
            </div>
            {comments &&
              comments.map(comment =>
                <div>
                  <span>{comment.username}</span>
                  <span id="comment">{comment.comment}</span>
                </div>
            )
            }
            </div>
        </Layout>
      </div>
    );
  }
}

export default Show;
