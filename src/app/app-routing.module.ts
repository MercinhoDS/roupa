import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { E404Component } from './e404/e404.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch: 'full'
  },
  {
    path: "home",
    title: "Página Inicial",
    component: HomeComponent
  },
  {
    path: "contact",
    title:"Página de Contato",
    component: ContactComponent
  },
  {
    path:"404",
    title: "Não Encontrado",
    component: E404Component
  },
  {
    path:"**",
    redirectTo: "404",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
