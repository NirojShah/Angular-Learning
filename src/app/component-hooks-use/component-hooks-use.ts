import { afterEveryRender, afterNextRender, Component, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-hooks-use',
  imports: [],
  templateUrl: './component-hooks-use.html',
  styleUrl: './component-hooks-use.css',
})
export class ComponentHooksUse {
  title = input<string>();

  constructor() {
    console.log('1. Constructor');

    afterNextRender(() => {
      console.log('4. AfterNextRender.');
    });

    afterEveryRender(() => {
      console.log('4. After every render.');
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('3. NgOnInit.');
  }

  ngOnDestroy() {
    console.log('5. This is Destry');
  }
}
