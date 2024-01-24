import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BasicComponent } from '../basic/basic.component';
import { IPostCardComponent } from './i-post-card/i-post-card.component';
import { CreatePostCardComponent } from './create-post-card/create-post-card.component';

@Component({
  selector: 'app-advance',
  standalone: true,
  imports: [RouterOutlet, RouterModule, BasicComponent, IPostCardComponent, CreatePostCardComponent],
  templateUrl: './advance.component.html',
  styleUrl: './advance.component.scss'
})
export class AdvanceComponent {

}
