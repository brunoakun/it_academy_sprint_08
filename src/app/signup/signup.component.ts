import { Component, OnInit } from '@angular/core';
import { Validators, UntypedFormBuilder } from '@angular/forms';
import Validation from '../funciones/CustomValidators';
import { LoginService } from '../login.service';
import { IUser } from '../modelos/user';

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
    private loginSrv: LoginService,
    private fb: UntypedFormBuilder
  ) { }


  // Métodos
  ngOnInit(): void {
  }

  onSubmit() {
    alert("onSubmit");
    this.submitted = true;
    if (this.registroForm.invalid) {
      return;
    }
    console.log(this.registroForm.value);
    alert('Valido');
  }


  get f() {
    return this.registroForm.controls;
  }


}
