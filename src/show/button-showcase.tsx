import { Button } from "@/components/ui/button";

export default function ButtonShowCase() {
    return <div className="flex gap-5">
        <Button variant={"default"}>Test</Button>
        <Button variant={"destructive"}>Test</Button>
        <Button variant={"ghost"}>Test</Button>
        <Button variant={"outline"}>Test</Button>
        <Button variant={"secondary"}>Test</Button>
    </div>
}