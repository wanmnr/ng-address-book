// address-book.models.ts

// export interface Contact {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
// }

export class Contact {
  constructor(
    public id: number = 0,
    public name: string = '',
    public email: string = '',
    public phone: string = ''
  ) {}
}
