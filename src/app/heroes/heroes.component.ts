import { Component, OnInit } from '@angular/core';
import { HEROESLIST } from './mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  

  heroes_list = ["srinivas","sesha","Gopal"];
  constructor() { }

  ngOnInit() {
  }

}
