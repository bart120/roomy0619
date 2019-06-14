import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Roomy';
  user: any = null;

  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.auth.user.subscribe(
      u => this.user = u
    );
  }

  logout(): void {
    this.auth.logout();
  }

}
