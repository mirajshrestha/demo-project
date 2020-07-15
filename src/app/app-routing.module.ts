import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent} from "./list/list.component";
import { HomeComponent} from "./home/home.component";
import { AddBlogComponent } from "./add-blog/add-blog.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'list', component: ListComponent},
  {path:'add-blog', component: AddBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
