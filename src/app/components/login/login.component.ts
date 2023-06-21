import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credencials } from 'src/app/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credencials = {
    email:  '', 
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(8));

  fieldsValidate(): boolean{
    if(this.email.valid && this.password.valid){
      return true
    }else{
      return false
    }
  }
}
