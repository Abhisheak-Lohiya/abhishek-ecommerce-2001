




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




  

  // Toggle dropdown function
  toggleDropdown(dropdownId: string): void {
    // Toggle the dropdown active state
    this.activeDropdown = this.activeDropdown === dropdownId ? null : dropdownId;
  }
  
  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Close dropdown when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Check if the click was outside dropdown triggers
    if (!target.closest('.has-dropdown')) {
      this.activeDropdown = null;
    }
  }

  




  
}






