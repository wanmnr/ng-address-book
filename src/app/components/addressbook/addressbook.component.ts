// addressbook.component.ts
import { Component } from '@angular/core';
import { Contact } from '../../models/address-book.models';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [FormComponent, ListComponent],
  templateUrl: './addressbook.component.html',
  styleUrl: './addressbook.component.css',
})
export class AddressBookComponent {
  title = 'Address Book';

  contact: Contact = {
    id: 9999,
    name: 'John Doe',
    email: 'example@mail.com',
    phone: '013-5353130',
  };
}
