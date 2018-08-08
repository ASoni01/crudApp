import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { UserUpdateComponent } from './components/user-update/user-update.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserAddComponent,
    UserListComponent,
    NavbarComponent,
    UserUpdateComponent
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
