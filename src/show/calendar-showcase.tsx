import { Calendar } from "@/components/ui/calendar"
import React from "react";

export default function CalendarShowcase() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <div className="mx-auto py-10">

        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
        />

        <Calendar
            mode="single"
            disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
            }
            captionLayout="dropdown"
        />
    </div>
}