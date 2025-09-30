import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function SkeletonShowCase() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Skeleton</h2>
        <p className="text-muted-foreground">
          Use to show a placeholder while content is loading. Provides visual feedback during data fetching.
        </p>
      </div>

      {/* Basic Skeletons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Basic Skeletons</h3>
        <div className="space-y-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Different Sizes</h3>
        <div className="space-y-3">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Small</p>
            <Skeleton className="h-3 w-[180px]" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Medium</p>
            <Skeleton className="h-4 w-[220px]" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Large</p>
            <Skeleton className="h-6 w-[280px]" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Extra Large</p>
            <Skeleton className="h-8 w-[320px]" />
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Different Shapes</h3>
        <div className="flex items-center space-x-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Circle</p>
            <Skeleton className="h-12 w-12 rounded-full" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Square</p>
            <Skeleton className="h-12 w-12 rounded-md" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Rectangle</p>
            <Skeleton className="h-12 w-24 rounded-md" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Rounded</p>
            <Skeleton className="h-12 w-20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Card Loading State */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Card Loading State</h3>
        <Card className="w-[350px]">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="flex space-x-2 pt-2">
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-8 w-16" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* NERV Data Loading */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">NERV System Loading</h3>
        <Card className="w-[400px] border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 dark:border-orange-800 dark:from-orange-950/20 dark:to-red-950/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-full bg-orange-200 dark:bg-orange-800" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[120px] bg-orange-200 dark:bg-orange-800" />
                <Skeleton className="h-3 w-[80px] bg-orange-200 dark:bg-orange-800" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Skeleton className="h-3 w-full bg-orange-200 dark:bg-orange-800" />
              <Skeleton className="h-3 w-5/6 bg-orange-200 dark:bg-orange-800" />
              <Skeleton className="h-3 w-4/5 bg-orange-200 dark:bg-orange-800" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <Skeleton className="h-6 w-full bg-orange-200 dark:bg-orange-800" />
              <Skeleton className="h-6 w-full bg-orange-200 dark:bg-orange-800" />
              <Skeleton className="h-6 w-full bg-orange-200 dark:bg-orange-800" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* List Loading State */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">List Loading State</h3>
        <div className="space-y-3 w-[300px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Loading State */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Table Loading State</h3>
        <div className="w-full max-w-md">
          <div className="space-y-2">
            {/* Header */}
            <div className="flex space-x-4 pb-2 border-b">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            {/* Rows */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex space-x-4 py-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Loading Demo */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Interactive Loading Demo</h3>
        <div className="space-y-4">
          <Button 
            onClick={() => setIsLoading(!isLoading)}
            variant="outline"
          >
            {isLoading ? "Show Content" : "Show Loading"}
          </Button>
          
          <Card className="w-[350px]">
            <CardHeader>
              {isLoading ? (
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <div className="h-full w-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">
                      R
                    </div>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Rei Ayanami</h4>
                    <p className="text-sm text-muted-foreground">EVA-00 Pilot</p>
                  </div>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex space-x-2 pt-2">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm">
                    The First Child and pilot of Evangelion Unit-00. Known for her quiet demeanor and mysterious background.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm">View Profile</Button>
                    <Button size="sm" variant="outline">Contact</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Usage Guidelines</h3>
        <div className="rounded-lg border p-4 space-y-2 text-sm">
          <p><strong>Match Content Structure:</strong> Skeleton should mirror the layout of the actual content</p>
          <p><strong>Appropriate Timing:</strong> Show skeletons for loading states longer than 300ms</p>
          <p><strong>Progressive Loading:</strong> Load content progressively rather than all at once</p>
          <p><strong>Consistent Sizing:</strong> Use consistent skeleton sizes that match your content</p>
          <p><strong>Animation:</strong> The subtle pulse animation indicates active loading</p>
        </div>
      </div>
    </div>
  )
}