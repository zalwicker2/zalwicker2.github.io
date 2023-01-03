import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CtaButtonsComponent } from './home/cta-buttons/cta-buttons.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CtaButtonsComponent,
    SocialLinksComponent,
    AboutComponent,
    ResumeComponent,
    ContactInfoComponent,
    ProjectsComponent,
    ProjectDisplayComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
