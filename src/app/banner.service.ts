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

    const parsedPath = (pathName : string) => pathName.split('/');

    switch (parsedPath(pathName)[1]) {
      case 'contacts':
        return "Your Contacts"
      case 'details':
        return "Contact Details"
      default:
        return "Contacts App"
    }
  }
}
