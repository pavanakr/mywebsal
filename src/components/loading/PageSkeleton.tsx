import { Skeleton } from '@/components/ui/skeleton';

export function HeroSkeleton() {
  return (
    <div className="py-20 md:py-32 px-4">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-12 md:h-16 w-full max-w-2xl mx-auto" />
          <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          <Skeleton className="h-6 w-3/4 max-w-lg mx-auto" />
          <div className="flex gap-4 justify-center pt-4">
            <Skeleton className="h-12 w-36 rounded-lg" />
            <Skeleton className="h-12 w-36 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="py-16 px-4">
      <div className="container-custom">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-5 w-full max-w-md mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card space-y-4">
              <Skeleton className="h-12 w-12 rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TextBlockSkeleton() {
  return (
    <div className="py-16 px-4">
      <div className="container-custom max-w-4xl space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}

export function TestimonialsSkeleton() {
  return (
    <div className="py-16 px-4 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-8 w-56 mx-auto" />
          <Skeleton className="h-5 w-full max-w-sm mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-5 w-5 rounded" />
                ))}
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="flex items-center gap-3 pt-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="py-12 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-10 w-20 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen animate-pulse">
      <HeroSkeleton />
      <StatsSkeleton />
      <CardGridSkeleton count={6} />
      <TestimonialsSkeleton />
    </div>
  );
}
