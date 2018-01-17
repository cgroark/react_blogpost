import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Post extends Component {
  render() {
    return (
      <div className="Post">
      <h1> This is blog called {this.props.title}</h1>
      <div><Author author={this.props.allAuthors}/></div>
      <p> {this.props.body}</p>
      {this.props.comments.map (things => <li>{things}</li>)}
      </div>
  )}
}

class Author extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.author.map (names => <li>Written By {names}</li>)}</h2>
      </div>
  )}
}

export default Post;
