import { Injectable } from '@angular/core'; //Allows for dependency injection
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Contact } from './contact'
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  constructor(private http : HttpClient) { }

  /*
  CONTACTS SERVICE REFACTOR
  -------------------------
  To Do: 
    [] Move from 'mock' contacts array to contacts generated from API request to JSON Placeholder API
  */

  jsonPlaceholderUrl : string =  "https://jsonplaceholder.typicode.com/users"

  getContacts(): Observable<Contact[]>{
    const contacts = this.http.get<Contact[]>(this.jsonPlaceholderUrl) 
    return contacts
  }
}
