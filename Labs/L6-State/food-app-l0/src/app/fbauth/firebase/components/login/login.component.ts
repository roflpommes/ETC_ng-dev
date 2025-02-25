import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginCredentials } from '../../credential.model';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private as: FirebaseAuthService) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  logIn(form: FormGroup) {
    let vm: LoginCredentials = form.value;
    this.as.logOn(vm.email, vm.password);
  }
}
