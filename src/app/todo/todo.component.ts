import {Component, OnInit} from '@angular/core';
import {TodoService} from "./todo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  private todos;
  private activeTasks;
  private newTodo;
  private _id;
  private path;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
  }



  getTodos(path) {
    return this.todoService.get(path).then(todos => {
      this.todos = todos;
      console.log(this.todos);
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i]._id=i;
      }
      this._id = this.todos.length;
      console.log("this._id" + this._id);
    });
  }

  addTodo() {
    // this.todos.push(newTodo);
    this.todoService.add({_id: this._id, title: this.newTodo, isDone: false}).then(() => {
      return this.getTodos(this.path);
    }).then(() => {
      this.newTodo = '';
    });
  }

  updateTodo(oldValue, newValue) {
    console.log('updateTodo Launched');
    oldValue.title = newValue;
    return this.todoService.put(oldValue).then(() => {
      oldValue.editing = false;
      return this.getTodos(this.path);
    });
  }

  destroyTodo(todo) {
    console.log('destroyTodo Launched');
    this.todoService.delete(todo._id).then(() => {
      return this.getTodos(this.path);
    });
  }

  clearCompleted() {
    this.todoService.deleteCompleted().then(() => {
      this.getTodos(this.path);
    })
  }

  finishedTodo(todo) {
    this.todoService.finishTodo(todo).then(() => {
      this.getTodos(this.path);
    })
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    });
  }

}

