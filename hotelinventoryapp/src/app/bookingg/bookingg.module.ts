import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookinggRoutingModule } from './bookingg-routing.module';
import { BookinggComponent } from './bookingg.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BookinggComponent
  ],
  imports: [
    CommonModule,
    BookinggRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule
  ]
})
export class BookinggModule { }
