import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styles: []
})
export class RoomCreateComponent implements OnInit {

  formRoom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
    image: new FormControl('', [Validators.required])
  });

  pictures: Array<any> = [
    { id: 'Pegase.jpg', image: 'Image Pegase' },
    { id: 'Calliope.jpg', image: 'Image Calliope' },
    { id: 'Thalie.jpg', image: 'Image Thalie' }
  ];

  constructor(private serv: RoomService, private snack: MatSnackBar) { }

  ngOnInit() {
  }

  submit(): void {
    const room: Room = this.formRoom.value as Room;
    // console.log(room);
    this.serv.saveRoom(room).subscribe(
      data => this.snack.open(`Salle ${data.name} créée avec l'id ${data.id}`, 'OK', { duration: 3000 }),
      err => {
        console.log(err);
        this.snack.open(`Erreur ${err}`, 'OK', { duration: 3000 });
      }
    );
  }

}
