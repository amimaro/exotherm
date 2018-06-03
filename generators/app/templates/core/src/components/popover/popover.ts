import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  options: string;

  constructor(public viewCtrl: ViewController) {
    this.options = viewCtrl.data.options;
  }

  close(option) {
    this.viewCtrl.dismiss(option);
  }

}
