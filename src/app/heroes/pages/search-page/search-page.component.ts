import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.Interface';

@Component({
  selector: 'heroes-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public selectedHero?: Hero;
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  searchHear() {
    const value: string = this.searchInput.value || '';

    this.heroesService
      .getSuggestions(value)
      .subscribe((heores) => (this.heroes = heores));
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
    }

    const hero: Hero = event.option.value;

    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
  }
}
