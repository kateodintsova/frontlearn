import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search: string = '';
  searchField: string = 'title';
  posts: Post[] = [
    {title: 'Beer', text: 'Самое лучшее пиво'},
    {title: 'Bread', text: 'Самый лучший хлеб'},
    {title: 'JS', text: 'Самый язык'},
  ]  
}
