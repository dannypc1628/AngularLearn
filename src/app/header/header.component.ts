import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'The Will Will Web~~~~';
  url = 'http://blog.miniasp.com/';
  logourl = '/assets/images/logo.png';
  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = this.title + '123';
    }, 3000);
  }

}
