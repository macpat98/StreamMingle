import { Component } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly description: string = AppConstants.Description;
}
