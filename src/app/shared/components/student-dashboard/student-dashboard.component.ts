import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../services/snack-bar.service';
import { Istd } from '../../models/std';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  editId! : Istd

  constructor(private _snackBar : SnackBarService) { }

  ngOnInit(): void {
  }

  stdArr : Array<Istd> = [
  {
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    phone: "9876543210",
    stdId:'123'
  },
  {
    name: "Priya Patil",
    email: "priya.patil@example.com",
    phone: "9123456780",
    stdId:'123'
  },
  {
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    phone: "9988776655",
    stdId:'123'
  },
  {
    name: "Sneha Kulkarni",
    email: "sneha.k@example.com",
    phone: "9090909090",
    stdId:'123'
  }
];

  getNewStd(std : Istd){
    this.stdArr.push(std)
    this._snackBar.openSnackBar(`The new student with ${std.stdId} is created successfully!!`)

  }


  getRemoveId(id: string){
    let getIndex = this.stdArr.findIndex(f => f.stdId == id)
  this.stdArr.splice(getIndex,1)
  this._snackBar.openSnackBar(`The todoItem with Id ${id} is removed successfully!!`)
  }



  getEditstd(std : Istd){
    this.editId = std
  }


getUpdatedStd(std : Istd){
   let getIndex = this.stdArr.findIndex(s => s.stdId == std.stdId)
   this.stdArr[getIndex] = std
   this._snackBar.openSnackBar(`The student with Id ${std.stdId} is updated successfully!!`)
}




}
