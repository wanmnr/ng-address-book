// list.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AddressbookService } from '../../services/addressbook.service';
import { Contact } from '../../models/address-book.models';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  title = 'List of Contacts';

  contacts: Contact[] = [];
  addressbookService = inject(AddressbookService);

  ngOnInit(): void {
    this.contacts = this.addressbookService.getContacts();
  }

  editContact(contact: Contact) {
    //
  }

  deleteContact(index: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.addressbookService.deleteContact(index);
    }
  }
}
