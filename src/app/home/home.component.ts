import { VERSION } from '@angular/compiler';
import { Component } from '@angular/core';
import { SharedModule } from '../../modules/SharedModules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SharedModule ] ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  clicked = false;
  title = `Angular ${VERSION.full} is rad!`

  boat = {
    name: "Starfire",
    year: 1977,
    img: "/assets/boat.jpg"
  }

  handleClick(){
    this.clicked = true
  }
}
