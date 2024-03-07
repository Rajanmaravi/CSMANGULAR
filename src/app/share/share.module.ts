import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterpipePipe } from '../filterpipe.pipe';



@NgModule({
  declarations: [
    FilterpipePipe
  ],
  exports: [FilterpipePipe],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
