import { Component } from '@angular/core';
import {IUser} from './interfaces/user';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 users: IUser[];
 constructor(private userService: UserService) {
   this.userService.getUsers().subscribe(value => this.users = value);
 }
}
