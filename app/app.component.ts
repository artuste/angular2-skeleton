import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './users/user-detail.component';
import {DashboardComponent} from './dashboard/dashboard'

@Component({
    selector: 'app',
    template: `
        <div class="container">
        <h1>{{ title }}</h1>

        <ul class="nav nav-pills">
          <li role="presentation"><a [routerLink]="['Dashboard']">Dashboard</a></li>
          <li role="presentation"><a [routerLink]="['Users']">Users</a></li>
        </ul>

        <div class="panel panel-default">
          <div class="panel-body">
            <router-outlet></router-outlet>
          </div>
        </div>
        </div>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/users/:id', name: 'UserDetail', component: UserDetailComponent}
])
export class AppComponent {
    public title = 'Angular2 Skeleton App';

    ngOnInit() {
        console.log('AppComponent onInit');
    }
}