import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public charcterList: Character[] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }];

  // onDelete index value : number emitir

  onDeleteCharacter(id: string): void {
    // TODO: Emitir el ID del personaje
    console.log({id});
    this.onDelete.emit(id);
  }

}
