"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function DatePicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  console.log(date);

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md w-full"
    />
  );
}
