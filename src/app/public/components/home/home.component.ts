


import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    const categoriesContainer = document.querySelector('.categories-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    
    // Calculate scroll distance based on card width + gap
    const scrollDistance = 180; // 160px width + 20px gap
    
    nextButton?.addEventListener('click', function() {
      if (categoriesContainer) {
        categoriesContainer.scrollLeft += scrollDistance * 3; // Scroll 3 items at once
      }
    });
    
    prevButton?.addEventListener('click', function() {
      if (categoriesContainer) {
        categoriesContainer.scrollLeft -= scrollDistance * 3; // Scroll 3 items at once
      }
    });
  }
}

