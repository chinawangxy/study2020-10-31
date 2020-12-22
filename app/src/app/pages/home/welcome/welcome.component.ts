import { Banner } from './../../../services/date-types/common.type';
import { HomeService } from './../../../services/home.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
})
export class WelcomeComponent implements OnInit {
  carouselActiveIndex = 0;

  @ViewChild(NzCarouselComponent, { static: true })
  private nzCarousel: NzCarouselComponent;

  // 从后台拿到数据后 保存到组件内
  banners: Banner[];
  constructor(private homeService: HomeService) {
    this.homeService.getBanners().subscribe((banners) => {
      console.log('[轮播图数据：]', banners);
      this.banners = banners;
    });
  }

  ngOnInit(): void {}

  onBeforeChange({ to }) {
    console.log('[TO:]', to);

    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    console.log('[Type:]', type);
    this.nzCarousel[type]();
  }
}
