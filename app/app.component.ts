import {Component} from 'angular2/core';
import {User} from './user';
import {UserDetailComponent} from './user-detail.component';

@Component({
    selector: 'app',
    template: `
    <h1>{{title}}</h1>
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
    directives: [UserDetailComponent]
})
export class AppComponent {
    public title = 'Skeleton App';
    public users = USERS;
    public selectedUser:User;

    onSelect(user:User) {
        this.selectedUser = user;
    }
}


var USERS:User[] = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];