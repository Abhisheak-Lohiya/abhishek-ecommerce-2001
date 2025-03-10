import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Store active dropdown
  activeDropdown: string | null = null;
  isMobileMenuOpen: boolean = false;

  // Toggle dropdown function that was missing
  toggleDropdown(dropdownId: string): void {
    // For mobile views, toggle the active state
    this.activeDropdown = this.activeDropdown === dropdownId ? null : dropdownId;
  }

  // Toggle mobile menu
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}