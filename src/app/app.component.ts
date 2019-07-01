import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ExpenseTrackerApp';
  currentUser: any;

  constructor(
    private router: Router,
    private autheticationService: AuthenticationService
  ){
    this.autheticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.autheticationService.logout();
    this.router.navigate(['/login']);
  }
}
