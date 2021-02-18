// The Banner component should display information about the page in which it is being displayed as well as an icon that represents that page

import { Component, OnInit, Input } from '@angular/core';
import { BannerService } from '../banner.service'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private bannerService: BannerService) { }
  
  ngOnInit(): void {
    console.log(this.bannerService.sayHello())
  }

}
