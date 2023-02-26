import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {OnInit} from "@angular/core"
import { UserAddEditDialogComponent } from '../user-add-edit-dialog/user-add-edit-dialog.component';
import {MatDialog} from "@angular/material/dialog"




@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone','dob','address','gender','action'];
  dataSource = [];
  constructor(private userService:UserService,private dialog:MatDialog ){}
  ngOnInit(): void {
      this.getUsers()
  }
  getUsers(){
    this.userService.getUsers().subscribe({
      next:(res:any)=>{
        console.log("usres",res);
        this.dataSource=res.data;
      },
      error:(error)=>{
        console.log("Error",error)
      }
    })
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe({
      next:(res:any)=>{
        alert(res.message);
        this.getUsers();
      },
      error:(error:any)=>{
        console.log("Error",error)
      }
    })
  }
  openUserDialogWithData(data:any){
   const dialogRef= this.dialog.open(UserAddEditDialogComponent,{data});
   dialogRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.getUsers();
      }
    }
   })
  }
}
