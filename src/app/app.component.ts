import { Component } from '@angular/core';
import { Comment, User } from './class/chat';

const CURRENT_USER: User = new User(1, 'Tanaka Jiro');
const ANOTHER_USER: User = new User(2, 'Suzuki Taro');
const COMMENTS: Comment[] = [
  new Comment( ANOTHER_USER, "Suxukiの１つ目のコメントです。"),
  new Comment( ANOTHER_USER, "Suxukiの２つ目のコメントです。"),
  new Comment( CURRENT_USER, "Tanakaの１つ目のコメントです。"),
  new Comment( ANOTHER_USER, "Suxukiの３つ目のコメントです。"),
  new Comment( CURRENT_USER, "Tanakaの２つ目のコメントです。"),
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public content = '';
  public comments = COMMENTS;
  public currentUser = CURRENT_USER;

  addComment(comment: string){
    if(comment){
      this.comments.push(new Comment(this.currentUser, comment));
    }
  }
}

