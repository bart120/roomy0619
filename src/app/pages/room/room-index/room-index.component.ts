import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-index',
  templateUrl: './room-index.component.html',
  styles: []
})
export class RoomIndexComponent implements OnInit {

  rooms: Array<Room>;
  cols: Array<string> = ['toto', 'price', 'action'];

  constructor(private serv: RoomService) { }

  ngOnInit() {

    this.serv.getRooms().subscribe(
      data => this.rooms = data
    );
  }

}
