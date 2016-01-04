import {Component} from 'angular2/core';

@Component({
    selector: 'example',
    templateUrl: './app/example/example.html',
    directives: [ExampleComponent]
})

export class ExampleComponent {
    onClick(value) {
        console.log('value =>', value);
    }

    list = [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'}
    ];
}