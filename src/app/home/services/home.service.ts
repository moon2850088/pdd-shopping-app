import { Injectable } from '@angular/core';
import { TopMenu, Channel, ImageSlider } from 'src/app/shared/component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class HomeService {
    constructor(private http: HttpClient){}
      getTabs() {
          return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`,{ params: {icode: `${environment.iCode}`} });
      }

      getChannels () {
        return this.http.get<Channel[]>(`${environment.baseUrl}/channels`,{ params: {icode: `${environment.iCode}`} });
      }

      getBanners() {
        return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`,{ params: {icode: `${environment.iCode}`} });
      }
}