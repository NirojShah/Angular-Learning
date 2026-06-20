import { Component, signal } from '@angular/core';
import { transformedValue } from '@angular/forms/signals';

@Component({
  selector: 'app-datatype',
  imports: [],
  templateUrl: './datatype.html',
  styleUrl: './datatype.css',
})
export class Datatype {
  name = signal<string>('');
  age = signal<number>(0);

  showHideStatus = signal<boolean>(false);

  nameAgeList = signal<{ name: string; age: number }[]>([]);

  handleInput(e: Event): void {
    const s: string = (e.target as HTMLInputElement).value;
    this.name.set(s);
  }

  handleInputAge(e: Event): void {
    const s: number = Number((e.target as HTMLInputElement).value);
    this.age.set(s);
  }

  handleAddValue(): void {
    this.nameAgeList.update((val) => [...val, { name: this.name(), age: this.age() }]);
    this.name.set("");
    this.age.set(0);
  }

  handleToggleListDisplay(): void{
    this.showHideStatus.set(!this.showHideStatus())
  }
}
