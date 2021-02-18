import { Injectable } from '@angular/core';
import { IconDefinition  } from '@fortawesome/free-solid-svg-icons'
@Injectable({
  providedIn: 'root'
})
export class IconService {
  
  icon?: IconDefinition;
  constructor() { }
}
