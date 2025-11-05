import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'angular-quiz';
  constructor(private authService: AuthService) {}

  get headerUsername() {
    return this.authService.user?.username || '';
  }
}
