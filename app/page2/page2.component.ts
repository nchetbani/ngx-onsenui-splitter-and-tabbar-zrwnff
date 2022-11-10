import { Component } from '@angular/core';

import { MenuService } from '../menu.service';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

@Component({
  selector: 'ons-page[page2]',
  templateUrl: './page2.component.html',
  styleUrls: [ './page2.component.css' ]
})
export class Page2Component {
  tab1 = Tab1Component;
  tab2 = Tab2Component;
  tab3 = Tab3Component;

  constructor(private menuService: MenuService) { }

  toggleMenu() {
    this.menuService.toggle();
  }
}