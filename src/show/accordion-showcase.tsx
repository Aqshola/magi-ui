import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionShowcase() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Accordion</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>MAGI System Overview</AccordionTrigger>
            <AccordionContent>
              The MAGI System consists of three supercomputers: MELCHIOR, BALTHASAR, and CASPER. 
              Each represents a different aspect of Dr. Akagi's personality and provides redundant 
              decision-making capabilities for NERV operations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Angel Detection Protocol</AccordionTrigger>
            <AccordionContent>
              The MAGI continuously monitors for Angel patterns through the city's sensor network. 
              When an Angel is detected, all three systems must reach consensus before initiating 
              combat protocols and Eva deployment procedures.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Eva Synchronization Data</AccordionTrigger>
            <AccordionContent>
              Real-time synchronization rates between pilots and their Eva units are processed 
              through the MAGI system. This data is crucial for maintaining optimal combat 
              effectiveness and pilot safety during operations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Multiple Selection Accordion</h3>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="security">
            <AccordionTrigger>Security Protocols</AccordionTrigger>
            <AccordionContent>
              NERV maintains multiple security clearance levels. Access to MAGI systems requires 
              Level 8 clearance or higher. All interactions are logged and monitored by the 
              security department.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="maintenance">
            <AccordionTrigger>System Maintenance</AccordionTrigger>
            <AccordionContent>
              Regular maintenance cycles are performed every 72 hours. During maintenance, 
              one MAGI unit remains online while the others undergo diagnostic procedures 
              and data integrity checks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="backup">
            <AccordionTrigger>Backup Procedures</AccordionTrigger>
            <AccordionContent>
              Critical data is backed up to secure off-site locations every 6 hours. 
              In case of catastrophic failure, the backup systems can restore full 
              functionality within 30 minutes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Styled Accordion</h3>
        <Accordion type="single" collapsible className="w-full border border-border rounded-lg">
          <AccordionItem value="eva-01" className="border-b border-border last:border-b-0">
            <AccordionTrigger className="px-4 hover:bg-muted/50">
              Evangelion Unit-01 Status
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sync Ratio:</span>
                  <span className="text-primary font-mono">98.7%</span>
                </div>
                <div className="flex justify-between">
                  <span>Power Level:</span>
                  <span className="text-green-500 font-mono">OPTIMAL</span>
                </div>
                <div className="flex justify-between">
                  <span>AT Field:</span>
                  <span className="text-blue-500 font-mono">ACTIVE</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="eva-00" className="border-b border-border last:border-b-0">
            <AccordionTrigger className="px-4 hover:bg-muted/50">
              Evangelion Unit-00 Status
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sync Ratio:</span>
                  <span className="text-primary font-mono">76.3%</span>
                </div>
                <div className="flex justify-between">
                  <span>Power Level:</span>
                  <span className="text-yellow-500 font-mono">STANDBY</span>
                </div>
                <div className="flex justify-between">
                  <span>AT Field:</span>
                  <span className="text-gray-500 font-mono">INACTIVE</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="eva-02" className="border-b border-border last:border-b-0">
            <AccordionTrigger className="px-4 hover:bg-muted/50">
              Evangelion Unit-02 Status
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sync Ratio:</span>
                  <span className="text-primary font-mono">84.1%</span>
                </div>
                <div className="flex justify-between">
                  <span>Power Level:</span>
                  <span className="text-green-500 font-mono">OPTIMAL</span>
                </div>
                <div className="flex justify-between">
                  <span>AT Field:</span>
                  <span className="text-blue-500 font-mono">ACTIVE</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}