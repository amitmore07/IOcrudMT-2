import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  editTodo! : Itodo

  constructor( private _snackBar: SnackBarService) { }

  ngOnInit(): void {
  }


  todosArr : Array<Itodo>=[
    {
      todoItem:'JS',
      todoId: '123'
    },
    {
      todoItem:'TS',
      todoId: '124'
    },
    {
      todoItem:'RxJS',
      todoId: '125'
    }

  ]

getNewTodo(todo : Itodo){
  this.todosArr.unshift(todo)
}


getRemoveId(id:string){
  let getIndex = this.todosArr.findIndex(f => f.todoId == id)
  this.todosArr.splice(getIndex,1)
  this._snackBar.openSnackBar(`The todoItem with Id ${id} is removed successfully!!`)

}


getEditTodo(t : Itodo){
  this.editTodo = t

}

getUpadatedTodo(todo : Itodo){
  let getIndex = this.todosArr.findIndex(f => f.todoId == todo.todoId)
  if(getIndex >= 0){
    this.todosArr[getIndex] = todo
  }

}




}
