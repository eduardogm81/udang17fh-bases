import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  @Input()
  public charcterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDelete index value : number emitir

  onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del personaje
    console.log({index});
    this.onDelete.emit(index);
  }

}
