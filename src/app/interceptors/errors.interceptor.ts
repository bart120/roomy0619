import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
    constructor(private snack: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // console.log('intercep');
        /* const obs = next.handle(req);
        obs.subscribe(
            data => console.log(data)
        );
        return obs;*/
        return next.handle(req).pipe(
            catchError(err => {
                const message = err.message || err.error.message || err.statusText;
                this.snack.open('Erreur de connexion', 'ok', { duration: 3000 });
                return throwError(message);
            })
        );
    }
}
