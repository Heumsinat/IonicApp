import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public  nav: NavController) {

  }

  page1() {
      this.nav.push(ContactPage);
    }
  page2() {
        this.nav.push(AboutPage);
      }


}
