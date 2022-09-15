import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavItem } from './NavItem';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private httpClient : HttpClient) { }

  getNavItems(){
    return this.httpClient.get<NavItem[]>('assets/menu-items.json');
  }
}
