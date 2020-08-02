import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  public formTitle = new FormControl('');
  public formContent = new FormControl('');

  constructor(
      private route: Router
  ) { }

  ngOnInit(): void {
  }

  public submitForm() {

    let titles = JSON.parse(localStorage.getItem('titles')); // Open storage and covert to array
    if(titles == null){
      titles = [];
    }

    titles.push(this.formTitle.value); // Add title
    localStorage.setItem('titles', JSON.stringify(titles)); // Convert to string and save to storage

    this.route.navigate(['']);




      let contents = JSON.parse(localStorage.getItem('contents')); // Open storage and covert to array
      if(contents == null){
          contents = [];
      }

      contents.push(this.formContent.value); // Add title
      localStorage.setItem('contents', JSON.stringify(contents)); // Convert to string and save to storage

      this.route.navigate(['']);

  }

}
