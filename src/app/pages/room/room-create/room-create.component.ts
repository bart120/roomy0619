import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styles: []
})
export class RoomCreateComponent implements OnInit {

  room: Room = {};

  constructor() { }

  ngOnInit() {
  }

}
