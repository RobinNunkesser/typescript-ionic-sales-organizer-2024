import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'All Tasks', url: '/list', icon: 'albums' },
    { title: 'Customers', url: '/customers', icon: 'storefront' },
    { title: 'Team Members', url: '/team', icon: 'people-circle' },
  ];

  constructor() {}
}
