import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProyectsService } from 'src/app/shared/proyects.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  public projects: Project[]

  constructor(public projectsService: ProyectsService){
    
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getAll()
  }

}
