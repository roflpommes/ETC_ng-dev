import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { LoadingService } from './loading.service';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'food-app-l0';
  sidenavMode: MatDrawerMode = 'side';
  isLoading = false;

  constructor(public menuService: MenuService, public loadingService: LoadingService) {
    menuService.position$.subscribe((m) => (this.sidenavMode = m));
  }

  ngOnInit() {
    this.loadingService.getLoading().subscribe((value) => {
      Promise.resolve(null).then(() => this.isLoading = value);
    })
  }
}
