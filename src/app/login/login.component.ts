import { IUser } from './../modelos/user';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import Validation from '../funciones/CustomValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Propiedades
  submitted: boolean = false;
  usr: IUser = {
    email: '',
    password: ''
  }

  loginForm = this.fb.group({
    //  email: ['', [Validators.required, Validators.email]],
    email: ['', Validators.required],
    password: ['', [Validators.required]],

    url: ['', [Validators.required, Validation.urlValidator]],
  });

  // Constructor
  constructor(
    private loginSrv: LoginService,
    private fb: UntypedFormBuilder
  ) { }




  // Métodos
  ngOnInit(): void {
  }

  onSubmit() {
    //   alert("onSubmit");
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.usr = this.loginForm.value;
    this.loginSrv.logIn(this.usr);
  }


  get f() {
    return this.loginForm.controls;
  }


}
