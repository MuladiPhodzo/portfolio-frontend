import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService, Message } from '../../services/api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  name = '';
  email = '';
  number = '';
  message = '';
  showForm = true;

  constructor(
    private projectService: ProjectService,
    private dialogRef: MatDialogRef<ContactComponent>
  ) {}
  closeDialog(): void {
    this.dialogRef.close();
  }

  toggleForm() {
    const form = document.getElementById('contact-form');
    // Toggle the form visibility
    this.showForm = !this.showForm;
  };

  submitForm() {
    const message: Message = {
      name: this.name,
      email: this.email,
      number: this.number,
      message: this.message,
    };

    console.log('Message:', message);

    this.projectService.sendMessage(message).subscribe({
      next: (response) => {
        alert('Message sent!');
        this.name = '';
        this.email = '';
        this.number = '';
        this.message = '';
      },
      error: (error) => {
        console.error(error);
        alert('message not sent');
      }
    });
    this.dialogRef.close();
  }
}
