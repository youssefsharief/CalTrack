import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'navbar.component.html',
})
export class NavbarComponent {
    constructor(
        public authService: AuthService,
        private router: Router
    ) { }
    logout() {
        this.authService.logout()
        this.router.navigate(['/login'])
    }

}
