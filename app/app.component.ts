import {Component, OnInit} from 'angular2/core';
import {UsersComponent} from './users/users.component';

@Component({
    selector: 'app',
    template: `
      <h1>{{ title }}</h1>
      <users></users>`,
    directives: [UsersComponent]
})
export class AppComponent {
    public title = 'Angular2 Skeleton App';
}