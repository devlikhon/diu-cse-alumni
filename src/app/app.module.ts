import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { EventListComponent } from './pages/event-list/event-list.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { CommiteeListComponent } from './pages/commitee-list/commitee-list.component';
import { CommiteeDetailsComponent } from './pages/commitee-details/commitee-details.component';
import { AlumniProfileComponent } from './pages/alumni-profile/alumni-profile.component';
import { MembersComponent } from './pages/members/members.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MemberListComponent } from './pages/member-list/member-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationApprovalComponent } from './pages/registration-approval/registration-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    CommiteeListComponent,
    CommiteeDetailsComponent,
    AlumniProfileComponent,
    MembersComponent,
    ContactUsComponent,
    MemberListComponent,
    HomepageComponent,
    RegistrationComponent,
    LoginComponent,
    RegistrationApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
