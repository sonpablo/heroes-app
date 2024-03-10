import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.Interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: Hero;

  ngOnInit(): void {
    if (!this.hero) throw new Error('Method not implemented.');
  }
}
