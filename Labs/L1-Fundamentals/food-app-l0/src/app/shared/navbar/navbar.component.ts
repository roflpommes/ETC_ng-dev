import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { NavItem } from './NavItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems : NavItem[] = [];

  constructor(private navItemService : NavbarService) { }

  ngOnInit(): void {
    this.navItemService.getNavItems().subscribe( data => {
      this.navItems = data;
    });
  }

}
