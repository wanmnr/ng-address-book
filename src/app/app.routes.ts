// app.routes.ts

import { Routes } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { AddressBookComponent } from './components/addressbook/addressbook.component';

export const routes: Routes = [
  { path: '', redirectTo: 'addressbook', pathMatch: 'full' },
  { path: 'addressbook', component: AddressBookComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
];
