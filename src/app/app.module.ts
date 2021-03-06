import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactcardComponent } from './contactcard/contactcard.component';
import { InitialCircleComponent } from './initial-circle/initial-circle.component';
import { BannerComponent } from './banner/banner.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { BackButtonComponent } from './back-button/back-button.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactcardComponent,
    InitialCircleComponent,
    BannerComponent,
    ContactDetailsComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
