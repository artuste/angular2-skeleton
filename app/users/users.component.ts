import {Component, OnInit} from 'angular2/core';

import {User} from './user';
import {UserDetailComponent} from './user-detail.component';
import {UserService} from './user.service';

@Component({
    selector: 'users',
    templateUrl: './app/users/users.component.tpl.html',
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