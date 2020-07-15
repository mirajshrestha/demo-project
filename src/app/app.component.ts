import { Component } from '@angular/core';
import {ConfigService} from "./config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project';

  public myData = null;

  constructor(private configService: ConfigService) {
    this.displayDataInHeader();
  }

  displayDataInHeader() {
    this.configService.getConfig().subscribe((apiData) => {
      this.myData = apiData;
    });
  }
}
