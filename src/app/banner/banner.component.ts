// The Banner component should display information about the page in which it is being displayed as well as an icon that represents that page

import { Component, OnInit, Input } from '@angular/core';
import { BannerService } from '../banner.service'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private bannerService: BannerService) { }
  
  bannerText : string | undefined = undefined;
  icon!: IconDefinition;

  ngOnInit(): void {
    this.bannerText = this.bannerService.populateBanner().bannerText;
    this.icon = this.bannerService.populateBanner().icon;
  }
}
