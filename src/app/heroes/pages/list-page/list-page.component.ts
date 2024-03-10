import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.Interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'heroes-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css',
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroesService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
