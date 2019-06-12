import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-topfive',
    templateUrl: './room-top-five.component.html',
})
export class RoomTopFiveComponent implements OnInit {

    rooms: Array<any>;

    constructor() { }

    ngOnInit(): void {
        this.rooms = [
            { name: 'Calliope' },
            { name: 'Thalie' },
            { name: 'Pegase' }
        ];

    }
}
