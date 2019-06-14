import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private subject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    constructor(private router: Router) {
        const u = JSON.parse(sessionStorage.getItem('USER'));
        if (u != null) {
            this.subject.next(u);
        }
    }

    get user(): Observable<User> {
        return this.subject.asObservable();
    }

    login(login: string, password: string) {

        // appel serveur
        const user: User = { login: login, name: login };
        sessionStorage.setItem('USER', JSON.stringify(user));
        this.subject.next(user);

    }

    logout() {
        sessionStorage.removeItem('USER');
        this.subject.next(null);
        this.router.navigate(['home']);
    }
}
