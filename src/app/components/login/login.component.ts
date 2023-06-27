import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credencials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/services/auth.service';

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

  email =new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3))

  constructor(
    private toast: ToastrService, 
    private service: AuthService){}

  ngOnInit(): void{
  }

  login(){
    this.service.authenticate(this.creds). subscribe(response =>{
      this.toast.info(response.headers.get('Authorization'))
      console.log(response.headers.get('Authorization'))

    })
  }

  fieldsValidate(): boolean{
    return this.email.valid && this.password.valid
  }

  successfullLogin(authToken: string){
    localStorage.setItem('token', authToken);
  }

}
