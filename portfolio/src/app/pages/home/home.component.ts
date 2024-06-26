import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from 'src/app/models/form';
import { Project } from 'src/app/models/project';
import { ProyectsService } from 'src/app/shared/proyects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{

  public modalVideo: boolean = false 
  public projects: Project[]

  constructor(public projectsService: ProyectsService){
    
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getAll()
  }
  public openVideo(){
    this.modalVideo = true
  }

  public closeVideo(){
    this.modalVideo = false
  }

 

}
