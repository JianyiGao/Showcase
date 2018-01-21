import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from './Layout.js';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/project/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class = "show">
        <Layout>
          <h3>
            {this.state.project.name}
          </h3>
          <img src = {this.state.project.filelink} alt = "Picture" />
          <Link to = "/" class="btn btn-default">Back</Link>


        // <div class="panel panel-default">
        //   <div class="panel-heading">
        //     <h3 class="panel-title">Description</h3>
        //   </div>
        //   <div class="panel-body">
        //     {this.state.project.description}
        //   </div>
        //   <div class="panel-heading">
        //     <h3 class="panel-title">Github Link</h3>
        //   </div>
        //   <div class="panel-body">
        //     {this.state.project.link}
        //   </div>
        //   <div class="panel-heading">
        //     <h3 class="panel-title">Skills</h3>
        //   </div>
        //   <div class="panel-body">
        //     {this.state.project.skills}
        //   </div>
        // </div>

        </Layout>
      </div>

    );
  }
}

export default Show;
