import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RoomModule } from './pages/room/room.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    RoomModule,
    HomeModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
