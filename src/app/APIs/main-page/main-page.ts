import { Component } from '@angular/core';
import { GetApi } from '../get-api/get-api';

@Component({
  selector: 'app-main-page',
  imports: [GetApi],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {}
