import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  name:string;
  email:string;
  phone: number;
  @Output() taskAdded = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
addUser(userForm:any){
    this.taskAdded.emit({
    	name:this.name,
    	email:this.email,
    	phone:this.phone,
    	hide:true
    });
    this.name=' ';
    this.email=' ';
    this.phone=null;
    userForm.resetForm();
   
   
}

}
