"use client";

import { FormEvent, useMemo, useState } from "react";
import { format, parse, startOfDay } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  initialReservationForm,
  openingTimes,
  validateReservation,
  type ReservationErrors,
  type ReservationForm,
} from "@/lib/reservations";
import { cn } from "@/lib/utils";

const selectTriggerClassName = cn(
  "w-full min-h-12 h-auto justify-between rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm text-(--color-text) shadow-none",
  "focus-visible:border-(--color-primary) focus-visible:ring-2 focus-visible:ring-(--color-primary)/20",
  "data-placeholder:text-(--color-text-muted) dark:bg-white dark:hover:bg-white",
  "data-[size=default]:h-auto",
);

const dateTriggerClassName = cn(
  selectTriggerClassName,
  "inline-flex w-auto max-w-44 items-center gap-2 justify-start font-normal",
);

export default function ReservationsPage() {
  const [form, setForm] = useState<ReservationForm>(initialReservationForm);
  const [errors, setErrors] = useState<ReservationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  const todayStart = useMemo(() => startOfDay(new Date()), []);

  const selectedDate = useMemo(() => {
    if (!form.date) return undefined;
    const parsed = parse(form.date, "yyyy-MM-dd", new Date());
    return Number.isNaN(parsed.getTime()) ? undefined : parsed;
  }, [form.date]);

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
          Book your evening at Aster &amp; Oak in just a few clicks. We will hold your table for 15 minutes,
          and our team will contact you if we need any extra details.
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
            {errors.fullName ? (
              <p className="mt-2 text-xs text-(--color-support)">{errors.fullName}</p>
            ) : null}
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

          <div className="grid gap-5 md:grid-cols-[auto_1fr_1fr]">
            <div>
              <label htmlFor="date" className="mb-2 block text-sm font-medium">
                Date
              </label>
              <Popover open={dateOpen} onOpenChange={(open) => setDateOpen(open)}>
                <PopoverTrigger
                  id="date"
                  type="button"
                  className={cn(dateTriggerClassName, !form.date && "text-(--color-text-muted)")}
                  aria-invalid={!!errors.date}>
                  <CalendarIcon className="size-4 shrink-0 opacity-50" aria-hidden />
                  <span className="truncate text-left">
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </span>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      if (!date) return;
                      updateField("date", format(date, "yyyy-MM-dd"));
                      setDateOpen(false);
                    }}
                    disabled={{ before: todayStart }}
                    autoFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.date ? <p className="mt-2 text-xs text-(--color-support)">{errors.date}</p> : null}
            </div>
            <div>
              <label htmlFor="time" className="mb-2 block text-sm font-medium">
                Time
              </label>
              <Select value={form.time || null} onValueChange={(value) => updateField("time", value ?? "")}>
                <SelectTrigger id="time" className={selectTriggerClassName} aria-invalid={!!errors.time}>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent className="rounded-xl p-2 border-(--color-border)">
                  {openingTimes.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.time ? <p className="mt-2 text-xs text-(--color-support)">{errors.time}</p> : null}
            </div>
            <div>
              <label htmlFor="guests" className="mb-2 block text-sm font-medium">
                Guests
              </label>
              <Select
                value={form.guests || null}
                onValueChange={(value) => updateField("guests", value ?? "")}>
                <SelectTrigger id="guests" className={selectTriggerClassName} aria-invalid={!!errors.guests}>
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent className="rounded-xl p-2 border-(--color-border)">
                  {Array.from({ length: 10 }, (_, index) => index + 1).map((count) => (
                    <SelectItem key={count} value={String(count)}>
                      {count} {count === 1 ? "guest" : "guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
            className="w-full rounded-full bg-(--color-primary) px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90">
            Confirm Reservation
          </button>

          {isSubmitted ? (
            <p className="rounded-xl border border-(--color-accent) bg-accent/20 px-4 py-3 text-sm text-(--color-text)">
              Thank you! Your reservation request was received. 
            </p>
          ) : null}
        </form>
      </section>
    </div>
  );
}
