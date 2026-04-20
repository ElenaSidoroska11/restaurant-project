"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  initialReservationForm,
  openingTimes,
  validateReservation,
  type ReservationErrors,
  type ReservationForm,
} from "@/lib/reservations";

export default function ReservationsPage() {
  const [form, setForm] = useState<ReservationForm>(initialReservationForm);
  const [errors, setErrors] = useState<ReservationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  function updateField(field: keyof ReservationForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateReservation(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setErrors({});
    setForm(initialReservationForm);
  }

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:px-10 md:py-16">
      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">Reservations</p>
        <h1 className="mt-3 text-4xl text-(--color-primary) md:text-5xl">Reserve Your Table</h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-(--color-text-muted) md:text-base">
          Book your evening at Aster &amp; Oak in just a few clicks. We will hold your table for 15 minutes, and our
          team will contact you if we need any extra details.
        </p>

        <div className="mt-8 rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-sm">
          <h2 className="text-2xl">Reservation Details</h2>
          <ul className="mt-4 space-y-2 text-sm text-(--color-text-muted)">
            <li>Open daily: 12:00 - 23:00</li>
            <li>Last reservation slot: 21:00</li>
            <li>For groups above 10 guests, call us directly.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 shadow-sm md:p-8">
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="fullName" className="mb-2 block text-sm font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={form.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              className="w-full rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-(--color-primary)"
              placeholder="Elena Sidoroska"
            />
            {errors.fullName ? <p className="mt-2 text-xs text-(--color-support)">{errors.fullName}</p> : null}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-(--color-primary)"
                placeholder="name@email.com"
              />
              {errors.email ? <p className="mt-2 text-xs text-(--color-support)">{errors.email}</p> : null}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-(--color-primary)"
                placeholder="+389 70 000 000"
              />
              {errors.phone ? <p className="mt-2 text-xs text-(--color-support)">{errors.phone}</p> : null}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label htmlFor="date" className="mb-2 block text-sm font-medium">
                Date
              </label>
              <input
                id="date"
                type="date"
                min={minDate}
                value={form.date}
                onChange={(e) => updateField("date", e.target.value)}
                className="w-full rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-(--color-primary)"
              />
              {errors.date ? <p className="mt-2 text-xs text-(--color-support)">{errors.date}</p> : null}
            </div>
            <div>
              <label htmlFor="time" className="mb-2 block text-sm font-medium">
                Time
              </label>
              <select
                id="time"
                value={form.time}
                onChange={(e) => updateField("time", e.target.value)}
                className="w-full rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-(--color-primary)"
              >
                <option value="">Select time</option>
                {openingTimes.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time ? <p className="mt-2 text-xs text-(--color-support)">{errors.time}</p> : null}
            </div>
            <div>
              <label htmlFor="guests" className="mb-2 block text-sm font-medium">
                Guests
              </label>
              <select
                id="guests"
                value={form.guests}
                onChange={(e) => updateField("guests", e.target.value)}
                className="w-full rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-(--color-primary)"
              >
                <option value="">Select guests</option>
                {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
                  <option key={count} value={String(count)}>
                    {count} {count === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
              {errors.guests ? <p className="mt-2 text-xs text-(--color-support)">{errors.guests}</p> : null}
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="mb-2 block text-sm font-medium">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              className="w-full rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-(--color-primary)"
              placeholder="Allergies, occasion, or seating preference..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-(--color-primary) px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Confirm Reservation
          </button>

          {isSubmitted ? (
            <p className="rounded-xl border border-(--color-accent) bg-(--color-accent)/20 px-4 py-3 text-sm text-(--color-text)">
              Thank you! Your reservation request was received. We will confirm shortly by email.
            </p>
          ) : null}
        </form>
      </section>
    </div>
  );
}
