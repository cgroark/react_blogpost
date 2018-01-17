import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';
 
let dino = {
  title: "Dinos are awesome",
  author: ["jackie o", "jimmy page"],
  body: "check it out",
  comments: [
    "check it check it",
    "check it again"
    ]
 }


ReactDOM.render(<Post title={dino.title} allAuthors={dino.author} body={dino.body} comments={dino.comments}/>, document.getElementById('root'));
registerServiceWorker();

