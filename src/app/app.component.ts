import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'Micah Dittmar';

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateTo(url: string): void {
    // Call the scroll function first
    this.scrollToTop();
    
    // Use router.navigate to navigate to the desired URL
    this.router.navigate([url]);
  }
}