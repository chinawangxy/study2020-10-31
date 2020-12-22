import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WyCarouselComponent } from './welcome/components/wy-carousel/wy-carousel.component';

@NgModule({
  declarations: [HomeComponent, WelcomeComponent, WyCarouselComponent],
  imports: [ShareModule, HomeRoutingModule],
  exports: [HomeComponent],
})
export class HomeModule {}
