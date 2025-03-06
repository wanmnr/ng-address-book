// addressbook.service.ts
import { Injectable } from '@angular/core';
import { Contact } from '../models/address-book.models';

@Injectable({
  providedIn: 'root',
})
export class AddressbookService {
  private contacts: Contact[] = [];
  private nextId: number = 1;

  constructor() {}

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }

  addContact(contact: Contact): void {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  deleteContact(id: number): void {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}
