import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IPostCardComponent } from './components/advance/i-post-card/i-post-card.component';
import { CreatePostCardComponent } from './components/advance/create-post-card/create-post-card.component';
import { BasicComponent } from './components/basic/basic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, BasicComponent, IPostCardComponent, CreatePostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-17-crud-operations-with-ngrx';

}
