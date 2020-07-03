import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {IPost} from '../../interfaces/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isOpen = false;
  @Input()
  user: IUser;
  posts: IPost[];

  constructor(private postsService: UserService) { }

  ngOnInit(): void {
    this.postsService.getPostsForUser(this.user.id).subscribe(value => this.posts = value);
  }
  onClick = () => {
    this.isOpen = !this.isOpen;
  }

}
