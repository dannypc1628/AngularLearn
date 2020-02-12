import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title = 'The Will Will Web~~~~';
  url = 'http://blog.miniasp.com/';
  logourl = '/assets/images/logo.png';
  counter = 0;
  showIcon = true;

  @Output()
  logoclick = new EventEmitter<string>();

  constructor() {

  }
  changeTitle($event: MouseEvent) {
    this.title = 'AAABBCCC' + this.counter;
    console.log($event);
    console.log($event.target);
    if ($event.altKey === true) {
      console.log(' 有按alt ');
    }
    this.logoclick.emit(this.title);
    this.counter++;
  }
  changeTitle2(altKey: boolean) {
    console.log('changeTitle2觸發');
    if (altKey) {
      console.log(' 有按altKey ');
    }
  }
  getStyle() {
    return { 'font-size': (12 + this.counter) + 'px' };
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.title = this.title + '123';
    }, 3000);
  }

}
