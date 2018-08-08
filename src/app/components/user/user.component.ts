import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user') user: User;
  editUser:{};	

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }
 removeUser(user: User){
   const resp = confirm('Are you sure want to delete it?');
   if(resp){
   	this.dataService.removeUser(user);
   }
 }
 updateUser(user: User){
 	this.dataService.updateUser(user);
 	this.editUser=user;
 	console.log(this.editUser);
 }
}
