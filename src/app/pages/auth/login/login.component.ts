import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  login(mail: string, ev: MouseEvent): void {
    console.log(mail);
    console.log(this.passwd.nativeElement.value);
  }

}
