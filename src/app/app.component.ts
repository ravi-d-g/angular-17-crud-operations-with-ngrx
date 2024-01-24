import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IPostCardComponent } from './components/advance/i-post-card/i-post-card.component';
import { CreatePostCardComponent } from './components/advance/create-post-card/create-post-card.component';
import { BasicComponent } from './components/basic/basic.component';
import { PostType } from './models/post';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, BasicComponent, IPostCardComponent, CreatePostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular 17 CRUD Operations with ngRx';
  postList: PostType[] = [
    {
      postId: 1,
      userProfileUrl: "../../../assets/logo/user.png",
      userName: "Ravi G",
      userDesc: "Testing tmp Off",
      postUrl: "../../../assets/images/LOGO.png",
      postDesc: "testing",
      postDate: "",
      isLike: true,
      isCommnet: false,
      isShare: false,
      isSave: true,
      likeCount: 10,
      commentCount: 10,
      commentList: [],
    }
  ]

  constructor() {
    if (localStorage.getItem("postList") === null) {
      console.log('No List',)
      localStorage.setItem('postList', JSON.stringify(this.postList))
    } else {
      console.log('Is List',)
    }
  }

}
