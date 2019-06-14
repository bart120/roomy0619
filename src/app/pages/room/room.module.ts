import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTopFiveComponent } from './room-top-five/room-top-five.component';
import { MaterialModule } from 'src/app/material.module';
import { RoomIndexComponent } from './room-index/room-index.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RoomTopFiveComponent,
    RoomIndexComponent,
    RoomCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    RoomTopFiveComponent
  ]
})
export class RoomModule { }
