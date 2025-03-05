// addressbook.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookComponent } from './addressbook.component';

describe('AddressBookComponent', () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressBookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
