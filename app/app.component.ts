import {Component, OnInit} from 'angular2/core';
import {UsersComponent} from './users/users.component';

@Component({
    selector: 'app',
    template: `<users></users>`,
    directives: [UsersComponent]
})
export class AppComponent {

}