import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact'
@Component({
  selector: 'app-contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.css']
})
export class ContactcardComponent implements OnInit {
  
  @Input() contactInfo!: Contact;
  constructor() { }

  ngOnInit(): void {
  }

}
