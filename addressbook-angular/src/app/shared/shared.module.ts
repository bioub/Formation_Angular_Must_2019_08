import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SelectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, // en important Shared, on importe aussi Common
    FormsModule,
    SelectComponent,
  ]
})
export class SharedModule { }
