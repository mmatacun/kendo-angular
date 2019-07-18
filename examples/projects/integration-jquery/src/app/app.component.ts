import { Component } from '@angular/core';
import { menuItems } from './menu.items';
import { Router } from '@angular/router';

declare var kendo: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent  {

  public menuItems: any[] = menuItems;

  constructor(private router: Router) {
      if (window !== undefined) {
          (window as any).$ = kendo.jQuery;
      }
  }

  public onSelect({ item }): void {
    if (!item.items) {
      this.router.navigate([item.routerLink]);
    }
  }
}
