import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  
  constructor(private _heroService: HeroService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this._heroService.getHero(id).subscribe(
      (heroDetail: Hero) => {
        this.hero = heroDetail;
      }
    );
  }

}
