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

    const parsedPath = (pathName : string) => pathName.split('/');
    
    switch (parsedPath(pathName)[1]) {
      case 'contacts':
        return faAddressBook
      case 'details':
        return faUser
      default:
        return faStop
    }
  }
}
