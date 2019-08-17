import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArraysRoutingModule } from './arrays-routing.module';
import { CreateArrayComponent } from './create-array/create-array.component';

@NgModule({
  declarations: [CreateArrayComponent],
  imports: [
    CommonModule,
    ArraysRoutingModule
  ]
})
export class ArraysModule { }
