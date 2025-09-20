
import { Badge } from "@/components/ui/badge"

export default function BadgeShowcase(){
    return <div className="mx-auto flex gap-2">
        <Badge variant="default">Badge</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="secondary">Secondary</Badge>
    </div>
}