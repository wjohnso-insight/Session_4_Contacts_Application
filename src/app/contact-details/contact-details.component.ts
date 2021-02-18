import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service'
import { Contact } from '../contact'
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  selectedContact!: Contact;
  
  constructor(private route: ActivatedRoute, private contactsService: ContactsService) { 
  }
  
  ngOnInit(): void {
    const targetIdString = this.route.snapshot.paramMap.get('id');
    
    if(typeof targetIdString === "string"){
      const targetIdNum : number = parseInt(targetIdString);
      this.selectedContact = this.contactsService.getSelectedContact(targetIdNum)[0];
      console.log(this.selectedContact)
    }
  }

}
