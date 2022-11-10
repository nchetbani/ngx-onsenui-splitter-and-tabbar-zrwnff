import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { MenuService } from './menu.service';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  {
  side = Page1Component;
  content = Page2Component;
  @ViewChild('splitter') splitter;

  constructor(private menuService: MenuService) { }
  
  ngOnInit() {
    this.menuService.menu$.subscribe(() => this.splitter.nativeElement.side.toggle());
  }
}
