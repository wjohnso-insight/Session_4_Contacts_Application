import { Injectable } from '@angular/core';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  location: Location;
  
  constructor(location: Location) {
    this.location = location
   }
  
  populateBanner() : string{
    return 'Getting Banner'
  }
}
