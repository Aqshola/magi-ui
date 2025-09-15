import * as React from "react"
import { Progress } from "@/components/ui/progress"
import * as ProgressPrimitive from "@radix-ui/react-progress"

export default function ProgressShowcase() {
    const [progress, setProgress] = React.useState(13)
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className="mx-auto mb-5">
            daddadadad
            <Progress value={progress} className="w-500px" />

            <ProgressPrimitive.Root className="h-15 border-2 border-primary mt-5 w-64 grid grid-cols-10 p-1 gap-2">
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
                <div className="col-span-1 bg-primary">

                </div>
            </ProgressPrimitive.Root>
        </div>
    )
}