import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/std';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {

   isInEditMode : boolean = false
  @ViewChild ('stdForm') stdForm!: NgForm
  @Output() emitNewStd = new EventEmitter<Istd>()
  @Input() editStdObj ! : Istd
    @Output() emitUpadatedStd : EventEmitter<Istd> = new EventEmitter<Istd>()
  



  constructor( private _uuidService : UuidService) { }



  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!changes['editStdObj']['currentValue']){
      this.isInEditMode=true;
      this.stdForm.form.patchValue(changes['editStdObj']['currentValue'])
    }
    
  }


  stdSubmit(){
     if(this.stdForm.valid){
      let stdObj : Istd = {
       ... this.stdForm.value,
       stdId : this._uuidService.uuid()
      }
      this.stdForm.reset()
      console.log(stdObj)
      this.emitNewStd.emit(stdObj)
    localStorage.setItem("stdObj",JSON.stringify(stdObj))

      
  }
     }

onUpdate(){
  if(this.stdForm.valid){
    let UPDATED_OBJ = {
      ...this.stdForm.value,
      stdId : this.editStdObj.stdId
    }
    this.emitUpadatedStd.emit(UPDATED_OBJ)
  }
}







}



