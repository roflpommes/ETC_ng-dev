import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FirebaseAuthService } from './firebase-auth.service';
import { environment } from '../../../environments/environment.prod';
@Injectable({
    providedIn: 'root',
})
export class FBAuthGuard implements CanActivate, CanActivateChild {
    constructor(private router: Router, private as: FirebaseAuthService) {
        as.getToken().subscribe((t) => {
            this.token = t;
        });
    }

    token = '';

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (environment.authEnabled == false || this.token != '') {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}
