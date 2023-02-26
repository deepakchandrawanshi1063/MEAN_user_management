import { Component } from '@angular/core';
import { UserAddEditDialogComponent } from '../user-add-edit-dialog/user-add-edit-dialog.component';
import {MatDialog} from "@angular/material/dialog"
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog:MatDialog,private userService:UserService){}
  openUserDialog(){
    const dialogRef=this.dialog.open(UserAddEditDialogComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.userService.getUsers()
        }
      }
    })
  }
}
