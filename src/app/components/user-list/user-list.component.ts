import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import  { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users: User[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
  	this.users = this.dataService.getUser();
  }
 addUser(user:User){
 	this.dataService.addUser(user);
 }
}
