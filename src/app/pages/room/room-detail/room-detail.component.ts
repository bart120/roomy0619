import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styles: []
})
export class RoomDetailComponent implements OnInit {

  obsRoom: Observable<Room>;

  constructor(private serv: RoomService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.obsRoom = this.serv.getRoomById(id);
    // this.obsRoom.subscribe(null, err => console.warn(err));
  }

}
