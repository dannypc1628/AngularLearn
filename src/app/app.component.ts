import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  textcount = 0;
  keyin(text: string) {
    this.textcount = text.length;
  }
  keyesc(input: HTMLInputElement) {
    input.value = '';
    this.textcount = 0;
  }
}
