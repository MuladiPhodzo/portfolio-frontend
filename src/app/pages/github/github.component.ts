import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'
import { GithubService, Repo} from '../../services/github.service';


@Component({
  selector: 'app-github-services',
  imports: [CommonModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css'
})

export class GithubComponent implements OnInit{
  repos: Repo[] = [];
  loading = true;

  constructor(private githubService: GithubService){}

  ngOnInit() {
    this.githubService.getRepos().subscribe(
      (repos) => {
        const readmeRequests = repos.map(repo =>
          this.githubService.getReadme(repo.name).pipe(
            // Attach README content to each repo
            map(readmeContent => {
              repo.readme = readmeContent;
              return repo;
            })
          )
        );

        forkJoin(readmeRequests).subscribe(
          (reposWithReadmes) => {
            this.repos = reposWithReadmes;
            this.loading = false;
          },
          (error) => {
            console.error('Error loading READMEs:', error);
            this.loading = false;
          }
        );
      },
      (error) => {
        console.error('Error fetching repos:', error);
        this.loading = false;
      }
    );
  }
}

