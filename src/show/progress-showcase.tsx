import * as React from "react"
import { Progress } from "@/components/ui/progress"
import CustomProgressBar from "@/components/additional/custom-progress-bar"

export default function ProgressShowcase() {
    const [progress, setProgress] = React.useState(13)
    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className="mx-auto mb-5">
            <Progress value={progress} className="w-500px" />
            <CustomProgressBar value={59}/>
        </div>
    )
}