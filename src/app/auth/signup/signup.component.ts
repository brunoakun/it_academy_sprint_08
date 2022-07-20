/**
 * Formulario de registro
 */
import { Route, Router } from '@angular/router';

import { LoginService } from '../../_servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import Validation from '../../_funciones/CustomValidators';
import { IUser } from '../../_modelos/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // Propiedades
  submitted: boolean = false;
  usr: IUser = {
    email: '',
    password: ''
  }

  registroForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    confirmPassword: ['', Validators.required]
  },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    }
  );


  // Constructor
  constructor(
    public loginSrv: LoginService,
    private fb: UntypedFormBuilder,
    private router: Router
  ) { }


  // Métodos
  ngOnInit(): void {
    this.loginSrv.errorStr = '';
  }

  onSubmit() {
    // alert("onSubmit");
    this.submitted = true;
    if (this.registroForm.invalid) {
      return;
    }

    if (this.loginSrv.existeUsr(this.registroForm.value.email)) {
      this.registroForm.value.email.invalid;
      this.loginSrv.errorStr = 'Este usuario ya existe';
      return;
    };

    console.log(this.registroForm.value);
   // alert("valido" + JSON.stringify(this.registroForm.value));
    this.usr.email = this.registroForm.value.email;
    this.usr.password = this.registroForm.value.password;
    this.loginSrv.addUsr(this.usr);
    
    this.loginSrv.errorStr = '';
    this.loginSrv.messageStr = 'Usuario creado :-)';
    this.router.navigate(['/login'])


  }


  get f() {
    return this.registroForm.controls;
  }


}
