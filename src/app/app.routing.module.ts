import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ListTecnicsComponent } from './components/list-tecnics/list-tecnics.component';

const routes: Routes = [
  {
    path:'',component: NavComponent, children:[
      {path:'home', component: HomeComponent},
      {path:'tecnics', component: ListTecnicsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }