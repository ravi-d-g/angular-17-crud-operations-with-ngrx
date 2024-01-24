import { Component } from '@angular/core';
import { PostType } from '../../models/post';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss'
})
export class BasicComponent {


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

  postList: PostType[] = [];

  postLocation: string = '';
  postDesc: string = '';

  Post = {} as PostType;
  postUrl = '';
  fileToUpload: any;
  imageUrl: any = '../../../assets/images/LOGO.png';
  selectedFiles?: FileList;
  previews: string[] = [];
  selectedFileNames: string[] = [];
  cardDetails: any;
  isNewCreate = false;
  isEditCard = false;
  fileName = "";

  constructor(private service: DataService) {

  }

  ngOnInit() {

    this.service.addEventData.subscribe((data: any) => {
      if (data === true) {
        this.isNewCreate = true;
        this.isEditCard = false;
        this.resetInput();
      } else {
        this.isNewCreate = false;
      }
    });

    this.service.editEventData.subscribe((data: any) => {
      if (data === true) {
        this.isEditCard = true
        this.isNewCreate = false;
      } else {
        this.isEditCard = false;
      }
    });

    this.service.savedData.subscribe((data: any) => {
      if (data) {
        this.getCards();
      }
    });


    this.service.updateEditData.subscribe((data: any) => {
      this.Post = {} as PostType;
      this.previews = []
      this.cardDetails = data

      this.postDesc = this.cardDetails.postDesc
      this.postUrl = this.cardDetails.postUrl
      this.previews.push(this.cardDetails.postUrl);


    });

    this.getCards();

  }

  addCard() {
    this.service.setEventCreate(true)
  }

  getCards() {
    this.getLocalStorage();
  }

  editCard(item: any) {
    this.service.setEventEdit(true)
    this.service.setEditItemData(item);
  }

  deleteCard(item: any) {
    let index = this.postList.findIndex(x => x.postId === item.postId);
    this.postList.splice(index, 1);
    this.setLocalStorage(this.postList)
    this.service.setEventCreate(true)
  }


  setLocalStorage(list: any) {
    localStorage.setItem('postList', JSON.stringify(list))
  }

  getLocalStorage() {
    this.postList = JSON.parse(localStorage.getItem('postList') || '{}');
  }


  savePost() {

    this.Post.postId = (this.postList.length || 0) + 1;
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

    this.setLocalStorage(this.postList)

    this.resetInput()
  }

  updatePost() {
    this.Post = this.cardDetails;
    this.Post.postUrl = this.postUrl;
    this.Post.postDesc = this.postDesc;
    let index = this.postList.findIndex(x => x.postId === this.cardDetails.postId);
    this.postList[index] = this.Post;
    this.setLocalStorage(this.postList)
    this.resetInput()
  }

  resetInput() {
    this.Post = {} as PostType;
    this.previews = []
    this.postDesc = "";
    this.fileName = "";
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
