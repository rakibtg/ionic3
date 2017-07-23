import { Component } from '@angular/core';

import { WelcomePage } from '../../pages/welcome/welcome';
import { AboutPage } from '../../pages/about/about';

@Component({
  selector: 'tab',
  templateUrl: 'tab.html',
})

export class TabComponent {

  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = WelcomePage;
    this.tab2 = AboutPage;
  }

}
