import { API_CONFIG, ServicesModule } from './services.module';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { Banner } from './date-types/common.type';

@Injectable({
  providedIn: ServicesModule,
})
export class HomeService {
  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private url: string
  ) {}

  getBanners(): Observable<Banner[]> {
    return this.http
      .get(`${this.url}/banner`)
      .pipe(map((res: { banners: Banner[] }) => res.banners));
  }
}
