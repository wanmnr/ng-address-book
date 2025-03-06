// form.component.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
  submitted = false;
  isEditMode = false;

  constructor(private addressbookService: AddressbookService) {}

  model = new Contact(0, '', '', '');

  onSubmit(form: NgForm) {
    if (this.isEditMode) {
      this.addressbookService.updateContact(this.model);
    } else {
      this.addressbookService.addContact({ ...this.model });
    }
    this.submitted = true;
    this.reset(form);
  }

  setContact(contact: Contact) {
    this.model = { ...contact };
    this.isEditMode = true;
  }

  reset(form?: NgForm) {
    this.model = new Contact();
    this.submitted = false;
    this.isEditMode = false;

    if (form) {
      form.resetForm(this.model);
    }
  }
}
