import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService
  ){}
  ngOnInit():void{
    
  }

  logout(){
    this.router.navigate(['login'])
    this.authService.logout()
    this.toast.info('Successful logout!')
  }
}
