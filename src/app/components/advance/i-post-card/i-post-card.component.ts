import { NgForOf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { PostType } from '../../../models/post';
import { DataService } from '../../../services/data.service';
import { Subject } from 'rxjs/internal/Subject';
import { Observable, share } from 'rxjs';



@Component({
  selector: 'app-i-post-card',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './i-post-card.component.html',
  styleUrl: './i-post-card.component.scss'
})
export class IPostCardComponent {


  // postList: PostType[] = [
  //   {
  //     postId: 1,
  //     userProfileUrl: "../../../assets/logo/user.png",
  //     userName: "Ravi G",
  //     userDesc: "Testing tmp Off",
  //     postUrl: "../../../assets/images/LOGO.png",
  //     postDesc: "testing",
  //     postDate: "",
  //     isLike: true,
  //     isCommnet: false,
  //     isShare: false,
  //     isSave: true,
  //     likeCount: 10,
  //     commentCount: 10,
  //     commentList: [],
  //   }

  // ]

  postList: PostType[] = []
  constructor(private service: DataService) {

    // this.start();
    // localStorage.setItem('postList', JSON.stringify(this.postList))

    // this.postList = JSON.parse(localStorage.getItem('postList') || '{}');
  }

  ngOnInit() {
    this.service.savedData.subscribe((data: any) => {
      this.postList = JSON.parse(localStorage.getItem('postList') || '{}');
      this.postList.reverse()
    });

  }





  deleteCard(index: any) {
    // delete this.postList[index];
    this.postList.splice(index, 1);
    localStorage.setItem('postList', JSON.stringify(this.postList))
  }

  editCard(item: any) {
    this.service.setEditItemData(item);
  }


  clickLike(item: any, value: boolean) {
    item.isLike = value

  }

  clickSave(item: any, value: boolean) {
    item.isSave = value

  }






}
