import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton 
            key={i}
            className="aspect-video w-full rounded-xl bg-gray-800/50" 
          />
        ))}
      </div>
    </div>
  )
}

