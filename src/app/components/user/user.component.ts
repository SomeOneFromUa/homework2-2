import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {IPost} from '../../interfaces/post';
import {IAlbum} from '../../interfaces/Albums';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isOpen = false;
  AlbumDisable = false;
  @Input()
  user: IUser;
  posts: IPost[];
  albums: IAlbum[];

  constructor(private postsService: UserService, private AlbumService: UserService) { }

  ngOnInit(): void {
    this.postsService.getPostsForUser(this.user.id).subscribe(value => this.posts = value);
    this.AlbumService.getAlbumsForUsers(this.user.id).subscribe(value => this.albums = value);
  }
  onClick = () => {
    this.isOpen = !this.isOpen;
  };
  onAlbumsClick = () => {
    this.AlbumDisable = !this.AlbumDisable;
  }
}
