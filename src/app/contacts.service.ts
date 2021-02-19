import { Injectable } from '@angular/core'; //Allows for dependency injection
import { Contact } from './contact'
import { Contacts } from './contacts'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  constructor() { }

  /*
  CONTACTS SERVICE REFACTOR
  -------------------------
  To Do: 
    [] Move from 'mock' contacts array to contacts generated from API request to JSON Placeholder API
  */
  getContacts(): Contact[]{
    return Contacts; 
  }

  getSelectedContact(id : number){
    const contactsArr = this.getContacts();
    return contactsArr.filter(contact => contact.id === id);
  }
}
