import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../HEROES';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroList: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {

  }

  changeSelectedHero(hero: Hero){
    this.selectedHero = hero;
  }

}
