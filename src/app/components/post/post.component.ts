import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces/post';
import {IComments} from '../../interfaces/comment';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  isOpen = false;
@Input()
post: IPost;
comments: IComments[];
  constructor(private commentService: UserService) { }

  ngOnInit(): void {
    this.commentService.getCommentsForPost(this.post.id).subscribe(value => this.comments = value);
  }
onClick = () => {
    this.isOpen = !this.isOpen;
}
}
