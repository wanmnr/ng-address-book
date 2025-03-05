// addressbook.service.ts
import { Injectable } from '@angular/core';
import { Contact } from '../models/address-book.models';

@Injectable({
  providedIn: 'root',
})
export class AddressbookService {
  private contacts: Contact[] = [];

  constructor() {}

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  updateContact(index: number, contact: Contact): void {
    //
  }

  deleteContact(index: number): void {
    this.contacts.splice(index, 1);
  }
}
