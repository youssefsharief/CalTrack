import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';

@Component({
    selector: 'app-authenticated-nav-bar',
    templateUrl: 'authenticated-navbar.component.html',
})
export class AuthenticatedNavbarComponent {
    constructor(
        public authService: AuthService,
        private router: Router
    ) { }
    logout() {
        this.authService.logout()
        this.router.navigate(['/login'])
    }

}
