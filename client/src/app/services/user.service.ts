import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='http://localhost:5000/api/v1/user'
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get(this.url)
  }
  deleteUser(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  addUser(formData:any){
    return this.http.post(this.url,formData)
  }
  updateUser(id:any,formData:any){
    return this.http.put(`${this.url}/${id}`,formData)
  }
}
