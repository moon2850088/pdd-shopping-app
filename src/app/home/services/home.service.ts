import { Injectable } from '@angular/core';
import { TopMenu, Channel, ImageSlider } from 'src/app/shared/component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ad, Product } from 'src/app/shared/domain';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class HomeService {
    constructor(private http: HttpClient){}
      getTabs() {
          return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`);
      }

      getChannels () {
        return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
      }

      getBanners() {
        return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
      }

      getAdByTab(tab: string){
        return this.http.get<Ad>(`${environment.baseUrl}/ads`,{ params: { categories_like: tab} });
      }

      getProductsByTab(tab: string){
        return this.http.get<Product[]>(`${environment.baseUrl}/products`,{ params: { categories_like: tab} });
      }
}