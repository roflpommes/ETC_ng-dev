import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/menu.service';
import { NavbarService } from './navbar.service';
import { NavItem } from './NavItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems$: Observable<NavItem[]>;

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    this.navItems$ = this.menuService.getTopMenuItems();
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

}
