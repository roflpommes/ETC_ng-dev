import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NavItem } from './shared/navbar/NavItem';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private mediaObserver: MediaObserver) {
    this.handleChange();
  }

  visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  position$: BehaviorSubject<MatDrawerMode> = new BehaviorSubject<MatDrawerMode>("side");

  getTopMenuItems(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>('./assets/menu-items.json');
  }

  private handleChange() {
    this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        this.visible$.next(change.mqAlias == 'xs' ? false : true);
        this.position$.next(change.mqAlias == 'xs' ? 'over' : 'side');
      });
  }

  toggleMenu() {
    let nextVal = !this.visible$.value;
    this.visible$.next(nextVal);
  }


}
