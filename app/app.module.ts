import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { MenuService } from './menu.service';
import { Tab1Component } from './page2/tab1/tab1.component';
import { Tab2Component } from './page2/tab2/tab2.component';
import { Tab3Component } from './page2/tab3/tab3.component';

@NgModule({
  imports:         [ BrowserModule, FormsModule, OnsenModule ],
  declarations:    [ AppComponent, Page1Component, Page2Component, Tab1Component, Tab2Component, Tab3Component ],
  entryComponents: [ Page1Component, Page2Component, Tab1Component, Tab2Component, Tab3Component ],
  schemas:         [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:       [ AppComponent ],
  providers:       [ MenuService ]
})
export class AppModule { }
