import {Component} from 'angular2/core';
import {User} from './user';

@Component({
    selector: 'user-detail',
    template: `
    <div *ngIf="user">
      <h2>{{user.name}} details!</h2>
      <div><label>id: </label>{{user.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="user.name" placeholder="name"/>
      </div>
    </div>
  `,
    inputs: ['user']
})
export class UserDetailComponent {
    public user:User;
}