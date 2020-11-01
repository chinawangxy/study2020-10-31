import { ZrrorModule } from './zrror.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ZrrorModule],
  exports: [CommonModule, FormsModule, ZrrorModule],
})
export class ShareModule {}
