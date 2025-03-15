
// import { Component, HostListener, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {
//   activeDropdown: string | null = null; // Store active dropdown
//   isMobileMenuOpen: boolean = false; // Mobile menu state
  
//   ngOnInit() {
//     // Disable Bootstrap dropdowns on our custom elements
//     const dropdownElements = document.querySelectorAll('.nav-item > a.has-dropdown');
//     dropdownElements.forEach(element => {
//       element.removeAttribute('data-bs-toggle');
//       element.removeAttribute('data-bs-target');
//     });
//   }

//   // Toggle dropdown function
//   toggleDropdown(dropdownId: string): void {
//     // Close the dropdown if the same one is clicked again
//     this.activeDropdown = this.activeDropdown === dropdownId ? null : dropdownId;
//   }
  
//   // Toggle mobile menu
//   toggleMobileMenu(): void {
//     this.isMobileMenuOpen = !this.isMobileMenuOpen;
//   }

//   // Close dropdown when clicking outside
//   @HostListener('document:click', ['$event'])
//   onDocumentClick(event: MouseEvent): void {
//     const target = event.target as HTMLElement;
//     // Check if the click was outside dropdown triggers
//     if (!target.closest('.nav-item') && !target.closest('.menu-toggle')) {
//       this.activeDropdown = null; // Close any active dropdowns
//     }
//   }
// }




import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeDropdown: string | null = null; // Store active dropdown
  isMobileMenuOpen: boolean = false; // Mobile menu state
  
  ngOnInit() {
    // Disable Bootstrap dropdowns on our custom elements
    const dropdownElements = document.querySelectorAll('.nav-item > a.has-dropdown');
    dropdownElements.forEach(element => {
      element.removeAttribute('data-bs-toggle');
      element.removeAttribute('data-bs-target');
    });
  }

  // Handle mouseover event to open dropdown
  onMouseOver(dropdownId: string): void {
    this.activeDropdown = dropdownId;  // Set active dropdown
  }

  // Handle mouseleave event to close dropdown
  onMouseLeave(): void {
    this.activeDropdown = null;  // Close the dropdown
  }
  
  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item') && !target.closest('.menu-toggle')) {
      this.activeDropdown = null; // Close any active dropdowns
    }
  }
}


