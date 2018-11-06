import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { map, take } from 'rxjs/operators';
// import { AuthApiActions } from '@example-app/auth/actions';
// import * as fromAuth from '@example-app/auth/reducers';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private store: Store<fromAuth.State>) {}

//   canActivate(): Observable<boolean> {
//     return this.store.pipe(
//       select(fromAuth.getLoggedIn),
//       map(authed => {
//         if (!authed) {
//           this.store.dispatch(new AuthApiActions.LoginRedirect());
//           return false;
//         }

//         return true;
//       }),
//       take(1)
//     );
//   }
// }
