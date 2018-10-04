import { Component, OnInit } from '@angular/core';
import { HEROESLIST } from './mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Gopal'
  };

  heroes_list = HEROESLIST;
  constructor() { }

  ngOnInit() {
  }

}
