import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostType } from '../../../models/post';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-create-post-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post-card.component.html',
  styleUrl: './create-post-card.component.scss'
})
export class CreatePostCardComponent {


  postLocation: string = '';
  postDesc: string = '';

  Post = {} as PostType;
  postList: any = []
  postUrl = ''


  fileToUpload: any;
  imageUrl: any = '../../../assets/images/LOGO.png';
  selectedFiles?: FileList;
  previews: string[] = [];
  selectedFileNames: string[] = [];

  isEditCard = false
  cardDetails: any


  constructor(private http: HttpClient, private service: DataService) {
    this.postList = JSON.parse(localStorage.getItem('postList') || '{}');
  }


  ngOnInit() {
    this.service.updateEditData.subscribe((data: any) => {
      this.Post = {} as PostType;
      this.previews = []
      this.isEditCard = true;
      this.cardDetails = data


      this.postDesc = this.cardDetails.postDesc
      this.postUrl = this.cardDetails.postUrl
      this.previews.push(this.cardDetails.postUrl);

    });

  }

  savePost() {

    //     postId: 1,
    this.Post.userProfileUrl = "../../../assets/logo/user.png";
    this.Post.userName = "Ravi G";
    this.Post.userDesc = "Testing tmp Off";
    this.Post.postUrl = "../../../assets/images/LOGO.png";
    this.Post.postUrl = this.postUrl;
    this.Post.postDesc = this.postDesc;

    this.Post.postDate = "";
    this.Post.isLike = false;
    this.Post.isCommnet = false;
    this.Post.isShare = false;
    this.Post.isSave = false;
    this.Post.likeCount = 10;
    this.Post.commentCount = 10;
    this.Post.commentList = [];



    this.postList.push(this.Post)
    localStorage.setItem('postList', JSON.stringify(this.postList))


    this.resetInput()
  }
  resetInput() {

    this.Post = {} as PostType;
    this.previews = []
    this.postDesc = ""
    this.updateLocalStorageEvent()
  }

  updateLocalStorageEvent() {
    this.service.setLocalStorageEvent(true)
  }

  handleFileInput(event: any) {
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.previews.push(e.target.result);
          this.postUrl = e.target.result
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }
}
