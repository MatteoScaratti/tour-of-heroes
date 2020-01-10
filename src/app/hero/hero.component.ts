import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROES } from '../HEROES';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroList: Hero[] = [];
  selectedHero: Hero;

  constructor(private _heroService: HeroService,
              private _messageService: MessageService) { }

  ngOnInit() {
    this._heroService.getHeroList().subscribe(
      (heroes: Hero[]) => {
        this.heroList = heroes;
      }
    );
  }

  changeSelectedHero(hero: Hero){
    this._messageService.postMessage("Hai selezionato l'eroe " + hero.name);
    this.selectedHero = hero;
  }

}
