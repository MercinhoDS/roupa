import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { E404Component } from './e404/e404.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
   {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
   },
   {
     path: 'home',
     title: 'Página Inicial',
     component: HomeComponent
   },
   {
     path: 'about',
     title: 'Página Sobre',
     component: AboutComponent
   },
   {
     path: 'product',
     title: 'Página de Produtos',
     component: ProductComponent
   },
  {
    path: 'contact',
    title: 'Página de Contato',
    component: ContactComponent
  }
   ,
   {
     path: 'privacy',
     title: 'Política e Privacidade',
     component: PrivacyComponent
   },
   {
     path: '404',
     title: 'Não Encontrado',
     component: E404Component
   },
   {
     path: '**',
     redirectTo: '404',
     pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
