import * as ProgressPrimitive from "@radix-ui/react-progress"
interface CustomProgressBarProps {
    value: number;
}

export default function CustomProgressBar(props: CustomProgressBarProps) {
    const value = props.value>100?10: Math.floor(props.value / 10)
    const mapping = Array.from({ length: value })
    return <ProgressPrimitive.Root className="h-15 border-2 border-primary mt-5 w-64 grid grid-cols-10 p-1 gap-2">
        {mapping.map((_, index) => (
            <div className="col-span-1 bg-primary" key={index}>

            </div>
        ))}

    </ProgressPrimitive.Root>

}