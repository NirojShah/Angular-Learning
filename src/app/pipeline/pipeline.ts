import { UpperCasePipe,DatePipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomNamePipePipe } from '../pipe/custom-name-pipe-pipe';
import { CustomNameArrArgsPipePipe } from '../pipe/custom-name-arr-args-pipe-pipe';

@Component({
  selector: 'app-pipeline',
  imports: [UpperCasePipe,DatePipe,CustomNamePipePipe, CustomNameArrArgsPipePipe, CurrencyPipe],
  templateUrl: './pipeline.html',
  styleUrl: './pipeline.css',
})
export class Pipeline {
  name: string = "Niroj Shah"
  date: Date = new Date(); 

  amountInDollar: number = 12;
  amountInRupees: number = 25;
}
