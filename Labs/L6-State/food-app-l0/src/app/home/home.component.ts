import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../fbauth/firebase/firebase-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient, public as: FirebaseAuthService) { }

  currentUser: firebase.default.User | null;

  resp: any;

  ngOnInit() {
    this.as.User.subscribe((user) => {
      this.currentUser = user;
    });
  }

  logOut() {
    this.as.logOff();
  }
}
