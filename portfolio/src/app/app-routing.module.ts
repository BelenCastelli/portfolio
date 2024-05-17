import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TechsComponent } from './pages/techs/techs.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component :HomeComponent},
  {path: 'home', component :HomeComponent},
  {path: 'about', component :AboutComponent},
  {path: 'techs', component :TechsComponent},
  {path: 'projects', component :ProyectosComponent},
  {path: 'contact', component :ContactComponent}
];
const routerOption: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'

}
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOption)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
