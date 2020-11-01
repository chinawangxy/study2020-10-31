import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './../pages/pages.module';
import { ServicesModule } from './../services/services.module';
import { ShareModule } from './../share/share.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    ShareModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    AppRoutingModule,
  ],
  exports: [ShareModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() private parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppMdoule引入');
    }
  }
}
