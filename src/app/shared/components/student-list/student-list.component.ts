import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/std';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  @Input() stdInfo !: Array<Istd>
  @Output() emitRemoveId : EventEmitter <string> = new EventEmitter<string>()
  @Output() emitEditId : EventEmitter <Istd> = new EventEmitter<Istd>()


  constructor( private _matDialog : MatDialog) { }


  ngOnInit(): void {
  }

 onRemove(stdId: string){
    let matConfig = new MatDialogConfig();
    matConfig.width = '500px';
    matConfig.data=`Are you sure, you want to remove the student with Id ${stdId}`
    matConfig.disableClose = true;

    let matDialogRef = this. _matDialog.open(GetConfirmComponent,matConfig)
    matDialogRef.afterClosed().subscribe(flag => {
  if(flag){
    this.emitRemoveId.emit(stdId)
  }
})
  }




  onEdit(t : Istd){
    this.emitEditId.emit(t)
  }





  trackById(index: number, item: any) {
  return item.id;
}
}
