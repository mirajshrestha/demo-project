import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  public title = new FormControl('');
  public content = new FormControl('');

  constructor(
      private route: Router
  ) { }

  ngOnInit(): void {
  }

  public submitForm() {
    localStorage.setItem('title', this.title.value);
    localStorage.setItem('content', this.content.value);

    this.route.navigate(['']);
  }

}
