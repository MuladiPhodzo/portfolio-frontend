import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../../pages/contact/contact.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private dialog: MatDialog) {}

  openContactForm(): void {
    this.dialog.open(ContactComponent, {
      width: '700px',
      disableClose: false
    });
  }
}
