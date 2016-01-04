import {Component, OnInit} from 'angular2/core';
import {UsersComponent} from './users/users.component';
import {ExampleComponent} from './example/example'

@Component({
    selector: 'app',
    template: `
      <h1>{{ title }}</h1>
      <example></example>
      <users></users>`,
    directives: [UsersComponent, ExampleComponent]
})
export class AppComponent {
    public title = 'Angular2 Skeleton App';
}