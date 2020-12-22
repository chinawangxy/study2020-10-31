import { HomeModule } from './home/home.module';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [ShareModule, HomeModule],
  exports: [HomeModule],
})
export class PagesModule {}
