import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertShowCase() {
    return <>
        <div className="flex flex-col gap-5 max-w-lg mx-auto">

            <Alert>
                <AlertTitle>TEST ALERT</AlertTitle>
                <AlertDescription>
                    TEST ALERT DESCRIPTION
                </AlertDescription>
            </Alert>
            <Alert>
                <AlertTitle>
                    This Alert has a title and an icon. No description.
                </AlertTitle>
            </Alert>
            <Alert variant="destructive">
                <AlertTitle>ERROR</AlertTitle>
                <AlertDescription>
                    FINAL GATE/LOCKED
                </AlertDescription>
            </Alert>
        </div>

    </>
}