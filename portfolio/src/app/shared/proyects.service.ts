import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  public projects: Project[]
  constructor() { 
    this.projects = [new Project('myBooks','Aplicación web para gestionar tu biblioteca personal. Pudiendo añadir, modificar y eliminar libros.', 
    'Desarrollada en Angular y respaldada por una base de datos relacional (MySQL).', 'https://i.imgur.com/7MS3VuB.png'),
    new Project('PokeApi', 'Aplicación web para encontrar tus Pokémon favoritos. Puedes buscar por nombre, ID o tipo',
      'Desarrollada con HTML, CSS y JavaScript, esta aplicación se integra con  la API externa PokéApi para obtener datos actualizados sobre Pokémon.',
      'https://i.imgur.com/aXRGYxy.png'
    ),
    new Project('Tres en raya', 'Juego de tres en raya para dos jugadores.', 'Desarrollado con HTML, CSS y JavaScript.',
      'https://i.imgur.com/AqikaFQ.png'
    )
  ]
  }
  

  public getAll(){
    return this.projects
  }
}
