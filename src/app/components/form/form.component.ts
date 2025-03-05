// form.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from '../../models/address-book.models';
import { CommonModule } from '@angular/common';
import { AddressbookService } from '../../services/addressbook.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  model = new Contact(0, 'John Doe', 'example@mail.com', '+6013-5353130');
  submitted = false;

  constructor(private addressbookService: AddressbookService) {}

  onSubmit() {
    this.addressbookService.addContact({ ...this.model });
    this.submitted = true;
  }

  newContact() {
    this.model = new Contact();
    this.submitted = false;
  }
}
