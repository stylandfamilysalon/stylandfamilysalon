import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery | STYLAND Family Salon",
  description: "Browse our gallery to see our premium salon services, haircuts, styling, and the luxurious ambiance of STYLAND Family Salon.",
};

export default function GalleryPage() {
  // Generate an array of 17 images from the public/gallery folder
  const images = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/gallery${i + 1}.jpeg`,
    alt: `STYLAND Family Salon Gallery Image ${i + 1}`,
  }));

  return (
    <main className="bg-white text-black font-body w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-black md:h-[400px]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <span className="inline-block rounded-full bg-[#c89f5c]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#c89f5c] mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight !text-white sm:text-5xl md:text-6xl drop-shadow-md">
            Our Gallery
          </h1>
          <p className="mt-4 text-white/80 max-w-lg text-sm sm:text-base">
            Take a glimpse into our world of premium grooming, stunning transformations, and luxurious ambiance.
          </p>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="py-16 sm:py-24 bg-[#faf9f8]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          
          {/* CSS Columns Masonry Layout */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {images.map((img) => (
              <div 
                key={img.id} 
                className="group relative overflow-hidden rounded-xl break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
              >
                {/* Image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800} // This is just an aspect ratio hint; CSS handles the actual height
                  className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="inline-block rounded-full bg-[#c89f5c] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black mb-2 shadow-sm">
                      Gallery
                    </span>
                    <p className="text-white font-semibold text-lg drop-shadow-sm">
                      Styland Look #{img.id}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
