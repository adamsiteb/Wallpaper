import fs from 'fs'
import path from 'path'

export type Wallpaper = {
  id: string
  title: string
  category: string
  resolution: string
  src: string
}

export async function getWallpapers(): Promise<Wallpaper[]> {
  const wallpapersDir = path.join(process.cwd(), 'public', 'wallpapers')
  
  try {
    const files = await fs.promises.readdir(wallpapersDir)
    
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => ({
        id: file.replace(/\.[^/.]+$/, ""),
        title: "خلفية احترافية",
        category: "طبيعة",
        resolution: "4K",
        src: `/wallpapers/${file}`
      }))
  } catch (error) {
    console.error('Error loading wallpapers:', error)
    return []
  }
}

