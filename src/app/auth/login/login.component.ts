/**
 * Formulario de LogIn
 */
import { Router } from '@angular/router';
import { IUser } from '../../_modelos/user';
import { LoginService } from '../../_servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import Validation from '../../_funciones/CustomValidators';

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
    password: ['', [Validators.required]]
  });

  // Constructor
  constructor(
    private ruta: Router,
    public loginSrv: LoginService,
    private fb: UntypedFormBuilder,
    private router: Router
  ) { }


  // Métodos
  ngOnInit(): void {

  }

  onSubmit() {
    this.submitted = true;
    this.loginSrv.errorStr = '';
    this.loginSrv.messageStr = '';

    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.usr = this.loginForm.value;
    this.loginSrv.logIn(this.usr);

    if (this.loginSrv.logeado) this.router.navigate(['/'])
  }


  get f() {
    return this.loginForm.controls;
  }


}
