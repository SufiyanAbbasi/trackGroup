import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch,faChevronDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  search = faSearch;
  down = faChevronDown;
  showDropdown= false;
  showDropdowntwo= false;
  showDropdownthree= false;
  isSublistVisible = false;
  currentSublist = '';
  isMobileScreen = false;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
    if (!this.isMobileScreen && this.isSublistVisible) {
      this.goBack(); // Automatically go back to the main navbar on large screens
    }
  }

  checkScreenSize() {
    this.isMobileScreen = window.innerWidth < 992; // Bootstrap's lg breakpoint
  }

  toggleSublist(sublist: string) {
    if (this.isMobileScreen) {
      this.currentSublist = sublist;
      this.isSublistVisible = true;
    }
  }

  goBack() {
    this.isSublistVisible = false;
    this.currentSublist = '';
  }

}
