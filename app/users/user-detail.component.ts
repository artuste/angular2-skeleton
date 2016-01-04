import {Component} from 'angular2/core';
import {User} from './user';

@Component({
    selector: 'user-detail',
    templateUrl: './app/users/user-detail.component.tpl.html',
    inputs: ['user']
})
export class UserDetailComponent {
    public user:User;
}