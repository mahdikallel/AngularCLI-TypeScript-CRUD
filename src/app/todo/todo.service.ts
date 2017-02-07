import {Injectable} from '@angular/core';
import {PreActivation} from "@angular/router/src/router";
let todos = [];

@Injectable()
export class TodoService {

  constructor() {
  }

  /* get(path) {
   return new Promise(resolve => resolve(todos));
   }*/
  get(path) {
    return new Promise(resolve => {
      var data;
      if (path === 'completed' || path === 'active') {
        var isCompleted = path === 'completed';
        data = todos.filter(todo => todo.isDone === isCompleted);
      } else {
        data = todos;
      }
      resolve(data);
    });
  }

  add(data) {
    return new Promise(resolve => {
      todos.push(data);
      resolve(data);
    });
  }

  put(data) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === data._id);
      todos[index].title = data.title;
      resolve(data);
    })
  }

  delete(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }
  deleteCompleted(){
    return new Promise(resolve =>{
      todos = todos.filter(todo => !todo.isDone);
      resolve(todos);
    })
  }

  finishTodo(todoTofinish){

    return new Promise(resolve=>{
      let index = todos.findIndex(todo => todo._id === todoTofinish._id);
      todos[index].isDone = !todoTofinish.isDone;
    })
  }


}
