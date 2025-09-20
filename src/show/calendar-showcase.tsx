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
    </div>
}