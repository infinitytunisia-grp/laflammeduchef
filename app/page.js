import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-700 text-white py-4 px-4 text-center shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold">LA FLAMME Du Chef</h1>
        <p className="text-sm md:text-base">Bistro • Pasta • Sandwich</p>
      </header>

      {/* Menu Tabs */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="home">Accueil</TabsTrigger>
            <TabsTrigger value="bistrot">Bistrot</TabsTrigger>
            <TabsTrigger value="sandwiches">Sandwiches</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="mt-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-[500px] md:h-[700px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face-1%20%282%29.jpg-bzbdEp5GmMFAxeZJAcUNWACqXg3QHb.jpeg"
                  alt="Menu principal"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-red-700">Bienvenue chez LA FLAMME Du Chef</p>
              <p className="text-sm text-gray-600">Découvrez notre menu complet</p>
            </div>
          </TabsContent>

          {/* Bistrot Tab */}
          <TabsContent value="bistrot" className="mt-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-[500px] md:h-[700px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face-2.jpg-JU7csns99HtiUek3Si2RMSCAV1R7r0.jpeg"
                  alt="Menu bistrot et burgers"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>

          {/* Sandwiches Tab */}
          <TabsContent value="sandwiches" className="mt-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-[500px] md:h-[700px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face-4.jpg-OXHaY9Agl6lR62fhj1xBS7Om90Blal.jpeg"
                  alt="Menu sandwiches et salades"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>

          {/* Desserts Tab */}
          <TabsContent value="desserts" className="mt-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-[500px] md:h-[700px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face-3.jpg-bvD5Yxkuwx69GnfzQSUFujpToR9Ot5.jpeg"
                  alt="Menu desserts et boissons"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </TabsContent>

          {/* Info Tab */}
          <TabsContent value="info" className="mt-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-red-700 mb-4">LA FLAMME Du Chef</h2>
              <p className="mb-2">
                <span className="font-semibold">Adresse:</span> 15 Rue Du Point Du Jour Argentan 61200
              </p>
              <p className="mb-4">
                <span className="font-semibold">Téléphone:</span> 09 63 57 79 16
              </p>

              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Button className="bg-red-700 hover:bg-red-800">
                  <a href="tel:0963577916">Appeler maintenant</a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 px-4 text-center mt-8">
        <p className="text-sm text-gray-600">© 2025 LA FLAMME Du Chef - Tous droits réservés</p>
      </footer>
    </main>
  )
}
