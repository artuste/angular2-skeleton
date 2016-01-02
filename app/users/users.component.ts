import {Component, OnInit} from 'angular2/core';

import {User} from './user';
import {UserDetailComponent} from './user-detail.component';
import {UserService} from './user.service';

@Component({
    selector: 'users',
    template: `
    <h2>My Users</h2>
    <ul class="users">
      <li *ngFor="#user of users"
        [class.selected]="user === selectedUser"
        (click)="onSelect(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>
    </ul>
   <user-detail [user]="selectedUser"></user-detail>
  `,
    directives: [UserDetailComponent],
    providers: [UserService]
})
export class UsersComponent {
    public users:User[];
    public selectedUser:User;

    constructor(private _userService:UserService) {}

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this._userService.getUsers()
        .then(users => this.users = users)
    }

    onSelect(user:User) {
        this.selectedUser = user;
    }
}