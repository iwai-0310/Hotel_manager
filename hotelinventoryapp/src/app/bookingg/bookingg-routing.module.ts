import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookinggComponent } from './bookingg.component';

const routes: Routes = [{ path: '', component: BookinggComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookinggRoutingModule { }
