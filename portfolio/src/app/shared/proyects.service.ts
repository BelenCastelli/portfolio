import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  public projects: Project[]
  constructor() { 
    this.projects = [new Project('myBooks','Aplicación web para gestionar tu biblioteca personal.', 
    'Desarrollada en Angular y respaldada por una base de datos relacional (MySQL).', 'https://i.imgur.com/7MS3VuB.png', 'https://github.com/BelenCastelli/appBooks'),
    new Project('PokeApi', 'Aplicación web para encontrar pokemons. Puedes buscar por nombre, ID o tipo.',
      'Desarrollada con HTML, CSS y JavaScript, e integra la API externa PokéApi.',
      'https://i.imgur.com/aXRGYxy.png', 'https://github.com/BelenCastelli/PokeApi'
    ),
    new Project('Tres en raya', 'Juego de tres en raya para dos jugadores.', 'Desarrollado con HTML, CSS y JavaScript.',
      'https://i.imgur.com/AqikaFQ.png', 'https://github.com/BelenCastelli/TresEnRaya'
    )
  ]
  }
  

  public getAll(){
    return this.projects
  }
}
