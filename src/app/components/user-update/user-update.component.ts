import { Component, OnInit, EventEmitter,Input  } from '@angular/core';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
  inputs:['editUser']
})
export class UserUpdateComponent implements OnInit {
  editTask: any;
 @Input() editUser:any;
  
  constructor(public dataService: DataService) { }

  ngOnInit() {
  	

  }
  saveUser(){
  	console.log("Donw"); 	

  }



}
