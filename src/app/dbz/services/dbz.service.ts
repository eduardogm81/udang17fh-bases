import { Injectable } from '@angular/core';
import { Character } from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  constructor() {
  }

  onNewCharacter(character: Character): void {
    console.log(character);
    this.characters.push(character);
    // console.log('Main Page');
    // console.log(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
