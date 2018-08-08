import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class DataService {
	users:User[];
      editUser: {};


  constructor() { 
 	this.users =[]; 	
  }
  getUser(): User[]{
  	if(localStorage.getItem('users') === null){
  		this.users = [];
  	}else{
  		this.users = JSON.parse(localStorage.getItem('users'));
  	}
  	return this.users;
  }

  addUser( user: User): void{
  	this.users.unshift(user);
  	let users;
  	if(localStorage.getItem('users')=== null){
  		users = [];
  		users.unshift(user);
  		localStorage.setItem('users',JSON.stringify(users));
  	}else{
  		users = JSON.parse(localStorage.getItem('users'));
  		users.unshift(user);
  		localStorage.setItem('users',JSON.stringify(users));
  	}
  }

  removeUser( user: User ){
     this.users.splice(this.users.indexOf(user),1);
    localStorage.setItem('users',JSON.stringify(this.users));
  }

  updateUser( user: User){
    this.editUser = user;
    console.log(this.editUser);

  }

   
}
