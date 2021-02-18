import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Banner } from './banner'
import { IconService } from './icon.service';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  location: Location;
  
  constructor(location: Location, private iconService: IconService) {
    this.location = location
   }
  
  populateBanner() : Banner{
    return { 
      bannerText: this.getBannerText(location.pathname),
      icon: this.iconService.getIcon(location.pathname)
    }
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
