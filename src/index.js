import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hello from './Comps/Hello/HelloComp';
import HelloList from './Comps/Hello/HelloList';

import KanbanBoard from './Comps/KanbanBoard';
let cardsList=[
  {
    id : 1,
    title : "Read the Book",
    description : "I should read the whole book",
    status : "in-progress",
    tasks:[]
  },
  {
    id : 2,
    title : "Write some code",
    description : "Code along with the samples in the book",
    status: "todo",
    tasks:[
      {
        id:1,
        name : "ContatctList Example",
        done: true
      },
      {
        id:2,
        name:"Kanban Example",
        done:false
      },
      {
        id:3,
        name:"My Own experiments",
        done:false
      }
    ]
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Hello/>
    <HelloList/>
    <KanbanBoard cards={cardsList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
