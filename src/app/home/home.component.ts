import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titles;
  public contents;

  public myPostData;

  constructor(private configService: ConfigService) {
    this.getPostData();
  }

  ngOnInit(): void {
    this.titles = JSON.parse(localStorage.getItem('titles'));
    this.contents = JSON.parse(localStorage.getItem('contents'));
  }

  getPostData() {
    this.configService.getConfig().subscribe((jsonData) => {
      this.myPostData = jsonData;
    });
  }

  removeBlog(title) {
    let index = this.titles.indexOf(title);
    this.titles.splice(index, 1);
    localStorage.setItem("titles",JSON.stringify(this.titles));
  }


}
