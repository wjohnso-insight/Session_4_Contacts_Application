import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Banner } from './banner'

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  location: Location;
  
  constructor(location: Location) {
    this.location = location
   }
  
  populateBanner() : Banner{
    return { bannerText: this.getBannerText(location.pathname)}
  }

  private getBannerText(pathName : string) : string{
    switch (pathName) {
      case '/contacts':
        return "Your Contacts"
      case '/contactdetails':
        return "Contact Details"
      default:
        return "Contacts App"
    }
  }
}
