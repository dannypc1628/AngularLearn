import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None // 將元件的footer.component.css渲染到全域
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
