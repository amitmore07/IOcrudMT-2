import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { UuidService } from '../../services/uuid.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  isInEditMode : boolean = false
  @ViewChild('todoForm') todoForm! : NgForm
  @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitUpadatedTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  @Input() getEditTodo! : Itodo

  constructor(
    private _uuidService: UuidService,
    private _snackBar:SnackBarService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getEditTodo']['currentValue']){
      this.todoForm.form.patchValue(changes['getEditTodo']['currentValue'])
      this.isInEditMode=true;
    }
  }





onTodoSubmit(){
  if(this.todoForm.valid){
    let todo : Itodo ={
      ...this.todoForm.value,
      todoId: this._uuidService.uuid()
    }
    this.todoForm.reset()
    this.emitNewTodo.emit(todo)

  }
}


onUpdate(){
  let UPDATED_OBJ : Itodo = {
    ...this.todoForm.value,
    todoId : this.getEditTodo.todoId
  }
  this.emitUpadatedTodo.emit(UPDATED_OBJ)
  this.isInEditMode=false;
  this.todoForm.reset()
  this._snackBar.openSnackBar(`The todoItem ${UPDATED_OBJ.todoItem} with id ${UPDATED_OBJ.todoId} is Updated Successfully!!` )
}

}
