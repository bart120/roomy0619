import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  login(mail: string, ev: MouseEvent): void {
    // console.log(mail);
    // console.log(this.passwd.nativeElement.value);
    this.auth.login(mail, this.passwd.nativeElement.value);
  }

}
