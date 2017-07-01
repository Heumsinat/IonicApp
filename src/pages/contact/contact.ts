import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacts: any;
  constructor(public navCtrl: NavController) {
    this.contacts = [
            'Bread',
            'Milk',
            'Cheese',
            'Snacks',
            'Apples',
            'Bananas',
            'Peanut Butter',
            'Chocolate',
            'Avocada',
            'Vegemite',
            'Muffins',
            'Paper towels'
        ];

  }

}
