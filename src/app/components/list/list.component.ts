// list.component.ts
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AddressbookService } from '../../services/addressbook.service';
import { Contact } from '../../models/address-book.models';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  title = 'List of Contacts';

  contacts: Contact[] = [];
  @Output() editRequest = new EventEmitter<Contact>();

  router = inject(Router);
  addressbookService = inject(AddressbookService);

  ngOnInit(): void {
    this.contacts = this.addressbookService.getContacts();
  }

  viewContact(id: number): void {
    //
  }

  updateContact(contact: Contact): void {
    this.editRequest.emit(contact);
  }

  deleteContact(index: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.addressbookService.deleteContact(index);
      this.contacts = this.addressbookService.getContacts();
    }
  }
}
