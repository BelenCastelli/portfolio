import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { TechsComponent } from './pages/techs/techs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ProyectosComponent,
  
    
    AboutComponent,
    TechsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
