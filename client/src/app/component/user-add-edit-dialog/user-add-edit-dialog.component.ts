import { Component ,Inject,OnInit} from '@angular/core';
import {FormBuilder,FormGroup} from "@angular/forms"
import { UserService } from 'src/app/services/user.service';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog"


@Component({
  selector: 'app-user-add-edit-dialog',
  templateUrl: './user-add-edit-dialog.component.html',
  styleUrls: ['./user-add-edit-dialog.component.css']
})
export class UserAddEditDialogComponent implements OnInit {
 userForm:any=FormGroup;
  constructor(private formBuilder:FormBuilder,private userService:UserService,private dialogRef:MatDialogRef<UserAddEditDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any){
    this.userForm=this.formBuilder.group({
      name:"",
      email:"",
      phone:"",
      dob:"",
      address:"",
      gender:""
    })
  }
 
  ngOnInit(): void {
      this.userForm.patchValue(this.data)
  }
  onSubmitUserFormData(){
if(this.userForm.valid){
  if(this.data){
    this.userService.updateUser(this.data._id,this.userForm.value).subscribe({
      next:(res:any)=>{
        alert(res.message);
        this.dialogRef.close(true)
        
        },
      error:(error:any)=>{console.log("Error",error)}
    })
  }else{
    this.userService.addUser(this.userForm.value).subscribe({
      next:(res:any)=>{
        alert(res.message);
        this.dialogRef.close(true)
        
        },
      error:(error:any)=>{console.log("Error",error)}
    })
  }
 
}
  }
}
