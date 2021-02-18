import { Injectable } from '@angular/core';
import { IconDefinition, faUser, faStop, faAddressBook } from '@fortawesome/free-solid-svg-icons'
@Injectable({
  providedIn: 'root'
})
export class IconService {
  
  constructor() {}
  
  icon?: IconDefinition;
  pathName?: string;

  getIcon(pathName : string) : IconDefinition{
    switch (pathName) {
      case '/contacts':
        return faAddressBook
      case '/contactdetails':
        return faUser
      default:
        return faStop
    }
  }
}
