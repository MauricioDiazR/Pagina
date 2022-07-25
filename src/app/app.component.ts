import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'paginaWeb';
  public status: string;
  valores =  {'Opcion1': 'Me gusta','Opcion2': 'No Me gusta'};
  constructor(
    
  ){
    this.status = '';
  }
  

  ngOnInit(): void {
   
    console.log(this.valores['Opcion1'])
  }
  votar(){
    this.status= 'success';
    localStorage.setItem('status', this.status);
  }
}


