import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-700 text-white py-3 px-3 text-center shadow-md">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">LA FLAMME Du Chef</h1>
        <p className="text-xs sm:text-sm md:text-base">Bistro • Pasta • Sandwich</p>
      </header>

      {/* Menu Tabs */}
      <div className="w-full px-2 sm:px-4 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="home" className="w-full">
            {/* Mobile-optimized tab list */}
            <TabsList className="grid w-full grid-cols-5 h-auto p-1 bg-gray-100 rounded-lg mb-4">
              <TabsTrigger
                value="home"
                className="text-xs sm:text-sm px-1 sm:px-2 py-2 sm:py-2.5 data-[state=active]:bg-red-700 data-[state=active]:text-white"
              >
                Accueil
              </TabsTrigger>
              <TabsTrigger
                value="bistrot"
                className="text-xs sm:text-sm px-1 sm:px-2 py-2 sm:py-2.5 data-[state=active]:bg-red-700 data-[state=active]:text-white"
              >
                Bistrot
              </TabsTrigger>
              <TabsTrigger
                value="sandwiches"
                className="text-xs sm:text-sm px-1 sm:px-2 py-2 sm:py-2.5 data-[state=active]:bg-red-700 data-[state=active]:text-white"
              >
                Sandwiches
              </TabsTrigger>
              <TabsTrigger
                value="desserts"
                className="text-xs sm:text-sm px-1 sm:px-2 py-2 sm:py-2.5 data-[state=active]:bg-red-700 data-[state=active]:text-white"
              >
                Desserts
              </TabsTrigger>
              <TabsTrigger
                value="info"
                className="text-xs sm:text-sm px-1 sm:px-2 py-2 sm:py-2.5 data-[state=active]:bg-red-700 data-[state=active]:text-white"
              >
                Info
              </TabsTrigger>
            </TabsList>

            {/* Home Tab */}
            <TabsContent value="home" className="mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="relative w-full">
                  {/* Responsive image container */}
                  <div className="aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face-1%20%282%29.jpg-bzbdEp5GmMFAxeZJAcUNWACqXg3QHb.jpeg"
                      alt="Menu principal"
                      fill
                      className="object-contain"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 text-center px-2">
                <p className="text-base sm:text-lg font-semibold text-red-700">Bienvenue chez LA FLAMME Du Chef</p>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Découvrez notre menu complet</p>
              </div>
            </TabsContent>

            {/* Bistrot Tab */}
            <TabsContent value="bistrot" className="mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face-2.jpg-JU7csns99HtiUek3Si2RMSCAV1R7r0.jpeg"
                    alt="Menu bistrot et burgers"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Sandwiches Tab */}
            <TabsContent value="sandwiches" className="mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face-4.jpg-OXHaY9Agl6lR62fhj1xBS7Om90Blal.jpeg"
                    alt="Menu sandwiches et salades"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Desserts Tab */}
            <TabsContent value="desserts" className="mt-0">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/face-3.jpg-bvD5Yxkuwx69GnfzQSUFujpToR9Ot5.jpeg"
                    alt="Menu desserts et boissons"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 800px"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Info Tab */}
            <TabsContent value="info" className="mt-0">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-red-700 mb-4 text-center">LA FLAMME Du Chef</h2>

                {/* Contact info with better mobile layout */}
                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:mr-2 text-sm sm:text-base">
                      Adresse:
                    </span>
                    <span className="text-sm sm:text-base text-gray-600">15 Rue Du Point Du Jour Argentan 61200</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold text-gray-700 mb-1 sm:mb-0 sm:mr-2 text-sm sm:text-base">
                      Téléphone:
                    </span>
                    <span className="text-sm sm:text-base text-gray-600">09 63 57 79 16</span>
                  </div>
                </div>

                {/* Call button - full width on mobile */}
                <div className="flex justify-center">
                  <Button className="bg-red-700 hover:bg-red-800 w-full sm:w-auto px-6 py-3 text-sm sm:text-base">
                    <a href="tel:0963577916" className="flex items-center justify-center">
                      <span className="mr-2">📞</span>
                      Appeler maintenant
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-3 sm:py-4 px-3 sm:px-4 text-center mt-6 sm:mt-8">
        <p className="text-xs sm:text-sm text-gray-600">© 2025 LA FLAMME Du Chef - Tous droits réservés</p>
      </footer>
    </main>
  )
}
