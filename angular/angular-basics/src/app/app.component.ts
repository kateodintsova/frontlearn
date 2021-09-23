import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет про директивы', id: 2},
  ]

  updatePosts(post: Post) {
    console.log('post: ', post);
    this.posts.unshift(post);
    console.log(this.posts);
  }

  removePost(postId: number) {
    console.log('id to remove', postId);
    this.posts = this.posts.filter(p => p.id !== postId);
  }
}
