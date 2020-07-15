import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title;
  public content;

  public myPostData;

  constructor(private configService: ConfigService) {
    this.getPostData();
  }

  ngOnInit(): void {
    this.title = localStorage.getItem('title');
    this.content = localStorage.getItem('content');
  }

  getPostData() {
    this.configService.getConfig().subscribe((jsonData) => {
      this.myPostData = jsonData;
    });
  }

}
