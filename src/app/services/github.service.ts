import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'

export interface Repo{
  name: string;
  html_url: string;
  description: string;
  readme?: string
}

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private username = 'MuladiPhodzo'
  constructor(
    private http: HttpClient,
    // private repos: []

  ){}

  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(`https://api.github.com/users/${this.username}/repos`);
  }

  getReadme(repoName: string): Observable<string> {
    return this.http.get<any>(`https://api.github.com/repos/${this.username}/${repoName}/readme`)
      .pipe(
        map(response => {
          const decodedContent = atob(response.content);
          return decodedContent;
        })
      );
  }
}
