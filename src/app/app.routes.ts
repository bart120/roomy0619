import { Routes } from '@angular/router';
import { RoomIndexComponent } from './pages/room/room-index/room-index.component';
import { RoomCreateComponent } from './pages/room/room-create/room-create.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotFoundComponent } from './pages/home/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotFoundComponent },

    // { path: 'rooms', loadChildren: () => RoomModule },
    {
        path: 'rooms', children: [
            { path: 'index', component: RoomIndexComponent },
            { path: 'create', component: RoomCreateComponent }
        ]
    },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];
