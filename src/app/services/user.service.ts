import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../interfaces/user';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces/post';
import {IComments} from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpUsers: HttpClient, private httpPosts: HttpClient, private httpCommetns: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.httpUsers.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
  getPostsForUser(userId: number): Observable<IPost[]> {
    return this.httpPosts.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
  getCommentsForPost(postId: number): Observable<IComments[]> {
    return this.httpCommetns.get<IComments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
