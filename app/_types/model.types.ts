export enum Status {
  UNCONFIRMED = "unconfirmed",
  CHECKED_IN = "checked-in",
  CHECKED_OUT = "checked-out",
}

export interface Booking {
  id: string;
  guestId: string;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: Status;
  created_at: string;
  cabins: { name: string; image: string };
}

export interface Guest {
  email: string;
  name: string;
}

export interface Cabin {
  id: string;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
}

export interface Settings {
  minBookingLength: number;
  maxBookingLength: number;
}

export interface Country {
  name: string;
  flag: string;
}

export interface WildOasisDB {
  bookings: Booking[];
  guests: Guest[];
  cabins: Cabin[];
  countries: Country[];
  settings: Settings;
}
