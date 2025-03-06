// contact-details.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressbookService } from '../../services/addressbook.service';
import { Contact } from '../../models/address-book.models';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css',
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private addressbookService: AddressbookService
  ) {}

  ngOnInit(): void {
    // No need to unsubscribe for route params as Angular handles this internally
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.contact = this.addressbookService.getContact(id);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
