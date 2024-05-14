import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public modalVideo: boolean = false 
  constructor(){}

  public openVideo(){
    this.modalVideo = true
  }

  public closeVideo(){
    this.modalVideo = false
  }

}
