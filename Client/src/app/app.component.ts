import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/core/services/data.service';
import { AuthService } from 'app/core/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshUserProfileAfterRouteChange()
  }

  private refreshUserProfileAfterRouteChange() {
    this.router.events.filter(event => (event instanceof NavigationEnd)).subscribe((routeData: NavigationEnd) => {
      const excludedRoutes = ['/signup', '/signup/activate', '/signup/success', '/login', '/email_password_recovery',
        '/email_password_recovery/submit_new_password', '/email_password_recovery/password_recovered_successfully']
      if (!excludedRoutes.includes(routeData.urlAfterRedirects)) {
        this.fetchForData()
      }
    })
  }

  private fetchForData() {
    this.dataService.getUserDetails(this.authService.getId()).subscribe(
      data => this.authService.saveProfile(data)
    )
  }


}
