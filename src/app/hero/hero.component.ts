import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroList: Hero[] = [];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  ngOnInit(){
    this._heroService.getHeroList().subscribe(
      (heroes: Hero[]) => {
        this.heroList = heroes;
      }
    );

  }

  changeSelectedHero(hero: Hero){
    this.selectedHero = hero;
  }

}
