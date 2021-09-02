import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];

  obj = {a: 1, b: {c: 2}};

  img = 'https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png';

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over');
      this.img = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
    }, 5000);
  }
}
