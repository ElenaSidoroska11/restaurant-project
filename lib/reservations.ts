export type ReservationForm = {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

export type ReservationErrors = Partial<Record<keyof ReservationForm, string>>;

export const openingTimes = ["12:00", "13:30", "15:00", "18:00", "19:30", "21:00"];

export const initialReservationForm: ReservationForm = {
  fullName: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  notes: "",
};

export function validateReservation(form: ReservationForm): ReservationErrors {
  const errors: ReservationErrors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[+\d\s\-()]{7,}$/.test(form.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!form.date) {
    errors.date = "Please choose a reservation date.";
  }

  if (!form.time) {
    errors.time = "Please choose a time slot.";
  }

  if (!form.guests) {
    errors.guests = "Please select number of guests.";
  }

  return errors;
}
