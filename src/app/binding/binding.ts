import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class BindingComponent {
  imageUrl: string = 'https://picsum.photos/200/300';
  isActive = signal(false);

  handleClick(): void {
    this.isActive.set(!this.isActive());
  }

  buttonStatus = signal(false)

  handleStatusChange():void{
    this.buttonStatus.set(!this.buttonStatus())
  }

  defaultValue: string = "i am the default value."

  bgCol: string = "red"
}
