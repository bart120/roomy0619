import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private user: User;

    constructor(private auth: AuthService, private snack: MatSnackBar) {
        this.auth.user.subscribe(
            u => this.user = u
        );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.user != null) {
            return true;
        } else {
            this.snack.open('Interdit', 'ok', { duration: 3000 });
            return false;
        }

    }
}
