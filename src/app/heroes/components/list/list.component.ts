import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string[] = ['Spider-Man', 'Iron Man', 'Hulk', 'She-Hulk', 'Thor']
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

  resetHeroList() {
    this.heroNames = ['Spider-Man', 'Iron Man', 'Hulk', 'She-Hulk', 'Thor'];
    this.deletedHero = undefined;
  }
}
