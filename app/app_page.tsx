import { Search, Download, Heart } from 'lucide-react'
import Image from "next/image"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getWallpapers } from "@/utils/load-wallpapers"

export default async function WallpaperGallery() {
  const wallpapers = await getWallpapers()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="search"
                placeholder="ابحث عن خلفيات..."
                className="w-full pr-12 pl-4 bg-gray-800/50 border-gray-700 text-right h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {wallpapers.length > 0 ? (
            wallpapers.map((wallpaper) => (
              <div 
                key={wallpaper.id}
                className="group relative aspect-video overflow-hidden rounded-xl bg-gray-800"
              >
                <Image
                  src={wallpaper.src || "/placeholder.svg"}
                  alt={wallpaper.title}
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 w-full p-6 flex flex-col gap-4">
                    {/* Info */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-right">
                      <h3 className="font-bold text-lg">{wallpaper.title}</h3>
                      <p className="text-sm text-gray-300">{wallpaper.resolution} • {wallpaper.category}</p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3 justify-end">
                      <Button size="sm" variant="secondary">
                        <Heart className="h-4 w-4 ml-2" />
                        حفظ
                      </Button>
                      <Button size="sm">
                        <Download className="h-4 w-4 ml-2" />
                        تحميل
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-400">
              لم يتم العثور على خلفيات
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

