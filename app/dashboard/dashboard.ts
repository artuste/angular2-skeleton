import {Component} from 'angular2/core';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/dashboard.html',
    directives: [DashboardComponent]
})

export class DashboardComponent {
    onClick(value) {
        console.log('value =>', value);
    }

    list = [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'}
    ];
}