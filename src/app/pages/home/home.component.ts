import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    console.log('HomeComponent Constructor Called!');
  }

  ngOnInit(): void {
    console.log('HomeComponent Loaded!');
  }
}
