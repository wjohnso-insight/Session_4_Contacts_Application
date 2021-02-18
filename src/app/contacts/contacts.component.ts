import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact'
import { ContactsService } from '../contacts.service'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  contacts?: Contact[]; //Defined by contactsService.getContacts()
  bannerText: string = 'Your Contacts'

  constructor(private contactsService: ContactsService) { } //Dependency Injection

  getContacts(): void{
    this.contacts = this.contactsService.getContacts();
  }
  
  ngOnInit(): void {
    this.getContacts();
    console.log(this.contacts)
  }

}
