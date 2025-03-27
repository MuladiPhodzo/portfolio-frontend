import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github_link: string;
  live_demo?: string;
}

export interface Message {
  name: string;
  email: string;
  number: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private apiUrl = 'http://13.60.162.35:8000/api/contact'; // Django API URL

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl, message);
  }
}
