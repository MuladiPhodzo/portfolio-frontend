import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService, Message } from '../../services/api.service';
import { response } from 'express';
import { error } from 'console';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  name = '';
  email = '';
  number = '';
  message = '';
  showForm = true;

  constructor(private projectService: ProjectService) {}

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
  }
}
