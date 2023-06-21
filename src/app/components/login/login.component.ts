import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credencials } from 'src/app/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private toast: ToastrService){}
  creds: Credencials = {
    email:  '', 
    password: ''
  }


  ngOnInit(): void{
  }

  login(){
    this.toast.error('User or password invalid', 'login')
    this.creds.password = ''
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
