import { Component, Inject, AfterViewInit } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    const progressBars: NodeListOf<Element> = this.document.querySelectorAll(".progress-bar");

    const animateProgress = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let progress: string | null = entry.target.getAttribute("data-progress");
                if (progress) {
                    (entry.target as HTMLElement).style.width = `${progress}%`;
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            }
        });
    };

    const observer: IntersectionObserver = new IntersectionObserver(animateProgress, {
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    progressBars.forEach((bar) => observer.observe(bar));
  }
}
