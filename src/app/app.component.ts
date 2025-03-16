

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ecommerce-app';



//   constructor(private router: Router) {}
  
//   isAuthPage(): boolean {
//     const currentRoute = this.router.url;
//     return currentRoute === '/login' || currentRoute === '/register';
//   }
  
  
// }

// app.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoginOrRegisterPage = false;  // This will control whether the header is shown or not

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen to route changes and update the isLoginOrRegisterPage flag
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // Only listen to NavigationEnd events
      .subscribe((event: NavigationEnd) => {
        // Check if the current route is login or register
        this.isLoginOrRegisterPage = event.url.includes('/login') || event.url.includes('/register');
      });
  }
}


