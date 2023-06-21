import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ListTecnicsComponent } from './components/list-tecnics/list-tecnics.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'',component: NavComponent, children:[
      {path:'home', component: HomeComponent},
      {path:'tecnics', component: ListTecnicsComponent}
    ]
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }