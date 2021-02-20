import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { Contact } from '../contact'
import { ContactsService } from '../contacts.service'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  contacts!: Contact[]; //Defined by contactsService.getContacts()

  constructor(private contactsService: ContactsService) { } //Dependency Injection

  getContacts(): void{
    this.contactsService.getContacts().subscribe(contacts => this.contacts = contacts);
  }
  
  ngOnInit(): void {
    this.getContacts();
  }
}