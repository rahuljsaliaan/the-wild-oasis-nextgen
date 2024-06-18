import { Tables } from "../supabase/database.types";

export enum Status {
  UNCONFIRMED = "unconfirmed",
  CHECKED_IN = "checked-in",
  CHECKED_OUT = "checked-out",
}

export type Booking = Tables<"bookings">;

export type Guest = Tables<"guests">;

export type Cabin = PartialFields<
  Tables<"cabins">,
  "created_at" | "description"
>;

export type Settings = Tables<"settings">;

export interface Country {
  name: string;
  flag: string;
}
