/**
 * Validaciones custom
 * Isma ItAcademy
 */
import { LoginService } from '../_servicios/login.service';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export default class Validation {
  static loginSrv: LoginService;

  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  static multiplo5(control: AbstractControl): ValidationErrors | null {
    let nro = parseInt(control.value);
    if (nro % 5 == 0)
      return null;
    else
      return { multiplo5: true }
  }

  static urlValidator(control: AbstractControl) {
    if (control.value === '') {
      return null;
    }
    console.log(control.value);
    if (!control.value.startsWith('http') || !control.value.startsWith('http')) {
      console.log("urlValid:" + control.value);
      return { urlValid: true };
    }
    return null;
  }

  //static ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
  static ageValidator(control: AbstractControl) {
    //  alert(control.value)
    if (control.value === '') {
      return null;
    }
    if (control.value < 18) {
      return { menorDeEdad: true };
    }
    return null;
  }

  static usrExiste(control: AbstractControl) {
    if(control) console.log( control.value);
    if (control.value === '') {
      return null;
    }
    if (this.loginSrv.existeUsr(control.value)) {
      return { yaExiste: true };
    }
    return null;
  }


}