import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {UsersComponent} from './users/users.component';
import {DashboardComponent} from './dashboard/dashboard'

@Component({
    selector: 'app',
    template: `
      <h1>{{ title }}</h1>
      <dashboard></dashboard>
      <users></users>`,
    directives: [UsersComponent, DashboardComponent]
})
export class AppComponent {
    public title = 'Angular2 Skeleton App';
}