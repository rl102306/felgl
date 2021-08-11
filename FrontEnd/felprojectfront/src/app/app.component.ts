import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'felprojectfront';

  empresa = 'CeseOnline'



  getName(): void{

    console.log("Hola me llamo Victor Gomez");

  }
}
