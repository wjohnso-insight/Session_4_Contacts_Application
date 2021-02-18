import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-initial-circle',
  templateUrl: './initial-circle.component.html',
  styleUrls: ['./initial-circle.component.css']
})
export class InitialCircleComponent implements OnInit {
  
  @Input() contactName!: any;

  constructor() { }
  
  initials?: string;

  ngOnInit(): void {
    this.getInitials();
    console.log(this.initials);
  }
  
  getInitials() : void{
    const a = this.contactName.match(/\b(\w)/g); //Regex to get acronym 
    this.initials = a.join('');
  }
}
