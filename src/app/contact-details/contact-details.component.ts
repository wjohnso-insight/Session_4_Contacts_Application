import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { filter,map } from 'rxjs/operators'
import { ContactsService } from '../contacts.service'
import { Contact } from '../contact'
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  selectedContact!: Contact[];
  
  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { 

  }

  private getContacts(): Observable<Contact[]>{
    return this.contactsService.getContacts();
  }

  private getIdSlug(): number{
    const slug = this.route.snapshot.paramMap.get('id');
    if(typeof slug === 'string'){
      return parseInt(slug);
    }else{
      return 1;
    }
  }
  
  ngOnInit(): void {
    this.getContacts()
        .subscribe(contacts => this.selectedContact = contacts.filter(contact => contact.id === this.getIdSlug()));
  }
}


