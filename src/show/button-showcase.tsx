import { Button } from "@/components/ui/button";

export default function ButtonShowCase() {
    return (
        <div className="space-y-8 p-8">
            {/* Regular Buttons */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Regular Buttons</h3>
                <div className="flex gap-5">
                    <Button variant={"default"} isCustomPolygon={false}>Default</Button>
                    <Button variant={"destructive"} isCustomPolygon={false}>Destructive</Button>
                    <Button variant={"ghost"} isCustomPolygon={false}>Ghost</Button>
                    <Button variant={"outline"} isCustomPolygon={false}>Outline</Button>
                    <Button variant={"secondary"} isCustomPolygon={false}>Secondary</Button>
                </div>
            </div>

            {/* Custom Polygon Buttons with Mask */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Custom Polygon Buttons (with Mask)</h3>
                <div className="flex gap-5">
                    <Button variant={"default"} isCustomPolygon={true}>Default</Button>
                    <Button variant={"destructive"} isCustomPolygon={true}>Destructive</Button>
                    <Button variant={"ghost"} isCustomPolygon={true}>Ghost</Button>
                    <Button variant={"outline"} isCustomPolygon={true}>Outline</Button>
                    <Button variant={"secondary"} isCustomPolygon={true}>Secondary</Button>
                </div>
            </div>

            {/* Test with different corner radius */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Different Corner Styles</h3>
                <div className="flex gap-5">
                    <Button 
                        variant={"default"} 
                        isCustomPolygon={true}
                        style={{
                            "--corner-radius": "0 20 0 0",

                        } as any}
                    >
                        Angled Top-Right
                    </Button>
                    <Button 
                        variant={"destructive"} 
                        isCustomPolygon={true}
                        style={{"--corner-radius": "10 10 10 10"} as any}
                    >
                        All Corners
                    </Button>
                    <Button 
                        variant={"outline"} 
                        isCustomPolygon={true}
                        style={{"--corner-radius": "0 30 0 30"} as any}
                    >
                        Alternating
                    </Button>
                </div>
            </div>
        </div>
    );
}