import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  keyword = '';
  data: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/articles.json')
      .subscribe((result) => {
        this.data = result;
      });
  }

  changeKey(str) {
    this.keyword = str;
  }


  keyesc() {
    this.keyword = '';
  }
}
