import { UpperCasePipe,DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomNamePipePipe } from '../pipe/custom-name-pipe-pipe';
import { CustomNameArrArgsPipePipe } from '../pipe/custom-name-arr-args-pipe-pipe';

@Component({
  selector: 'app-pipeline',
  imports: [UpperCasePipe,DatePipe,CustomNamePipePipe, CustomNameArrArgsPipePipe],
  templateUrl: './pipeline.html',
  styleUrl: './pipeline.css',
})
export class Pipeline {
  name: string = "Niroj Shah"
  date: Date = new Date(); 
}
