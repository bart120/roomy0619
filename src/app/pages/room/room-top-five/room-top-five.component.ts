import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
    selector: 'app-topfive',
    templateUrl: './room-top-five.component.html',
})
export class RoomTopFiveComponent implements OnInit {

    rooms: Array<any>;
    // private serv: RoomService;

    constructor(private serv: RoomService) {
        // this.serv = serv;
    }

    ngOnInit(): void {
        /*
        this.rooms = [
            { name: 'Calliope', image: 'Calliope.jpg' },
            { name: 'Thalie', image: 'Thalie.jpg' },
            { name: 'Pegase', image: 'Pegase.jpg' }
        ];*/
        // this.rooms = this.serv.getTopFive();
        this.serv.getTopFive().subscribe(
            data => {
                this.rooms = data;
            }
        );
        /*this.serv.getTopFive2(
            data => {
                this.rooms = data;
            }
        );*/



    }
}
