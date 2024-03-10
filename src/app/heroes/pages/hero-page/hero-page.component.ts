import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.Interface';

@Component({
  selector: 'heroes-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;
  constructor(
    private heroService: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) {
          return this.router.navigate(['/heroes/list']);
        }
        this.hero = hero;
        console.log(
          '🚀 turbo-cl ⯈ file: hero-page.component.ts:28 ⯈ HeroPageComponent ⯈ .subscribe ⯈ this.hero: ',
          this.hero
        );

        return;
      });
  }

  goback(): void {
    this.router.navigateByUrl('heroes/list');
  }
}
