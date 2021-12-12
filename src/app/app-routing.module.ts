import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MisionComponent } from './mision/mision.component';
import { RegistroComponent } from './registro/registro.component';
import { VisionComponent } from './vision/vision.component';
import { ContactenosComponent } from './contactenos/contactenos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'CreateAccount', component: RegistroComponent},
  {path: 'WelcomeBack', component: LoginComponent},
  {path: 'mision', component: MisionComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'contactenos', component: ContactenosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
