import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Play, Check, Users, MapPin, Smile, Award, Quote } from "lucide-react";

export const metadata = {
  title: "Bridal Makeup Services in Hyderabad | STYLAND Family Salon",
  description: "Luxury bridal makeup services in Hyderabad. HD makeup, airbrush bridal makeup, hairstyling, pre-bridal packages, and personalized bridal beauty experiences at STYLAND Family Salon.",
};

export default function BridalMakeupPage() {
  return (
    <main className="font-body w-full overflow-hidden bg-[#F4EFEA]">
      
      {/* 1. STYLAND Glamour Moments (Mocha Background) */}
      <section className="w-full bg-[#8B624C] py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
            STYLAND Glamour Moments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12">
            {[
              "/gallery/gallery1.jpeg",
              "/gallery/gallery2.jpeg",
              "/gallery/gallery3.jpeg"
            ].map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden group cursor-pointer shadow-xl">
                <Image
                  src={src}
                  alt={`Glamour Moment ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/gallery"
              className="inline-block bg-white text-[#8B624C] font-bold py-3 px-8 rounded text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-md"
            >
              Explore More Looks
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Curated Pre-Bridal & Bridal Packages */}
      <section className="w-full py-16 sm:py-24 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 relative">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A2A2A] mb-2">
                Curated Pre-Bridal & Bridal<br/>Packages
              </h2>
              <p className="text-gray-500 text-lg">Pre-bridal Packages</p>
            </div>
            {/* Decorative Gold Splash - simulated with text/shape */}
            <div className="hidden md:flex absolute top-0 right-0 lg:right-12 xl:right-24 rotate-12 items-center justify-center">
               <div className="bg-[#E5C158] text-white font-extrabold text-2xl py-4 px-6 rounded-tl-[30px] rounded-br-[30px] rounded-tr-md rounded-bl-md shadow-lg transform -rotate-12">
                 Special<br/>Offer!
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Silver */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Silver</p>
               <div className="flex items-baseline gap-3 mb-6">
                 <span className="text-3xl font-extrabold text-[#2A2A2A]">₹14,999</span>
                 <span className="text-gray-400 line-through font-medium text-lg">₹18,000</span>
               </div>
               <ul className="space-y-4 mb-8">
                 {["Bridal Makeup", "Basic Hairstyling", "Saree Draping", "Eyelashes", "Basic Touch-Up", "Consultation Included"].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                     <span className="text-sm text-gray-700">{feature}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Gold */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow relative">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Gold</p>
               <div className="flex items-baseline gap-3 mb-6">
                 <span className="text-3xl font-extrabold text-[#2A2A2A]">₹21,999</span>
                 <span className="text-gray-400 line-through font-medium text-lg">₹28,000</span>
               </div>
               <ul className="space-y-4 mb-10">
                 {["HD Bridal Makeup", "Premium Hairstyling", "Saree Draping", "Eyelashes", "Nail Styling", "Complimentary Trial Session", "Pre-Bridal Facial"].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                     <span className="text-sm text-gray-700 font-medium">{feature}</span>
                   </li>
                 ))}
               </ul>
               <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-full text-center px-8">
                 <Link href="/book-appointment" className="inline-block w-full max-w-[200px] bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded text-sm hover:bg-black transition-colors shadow-lg">
                   Book Now
                 </Link>
               </div>
            </div>

            {/* Platinum */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Platinum</p>
               <div className="flex items-baseline gap-3 mb-6">
                 <span className="text-3xl font-extrabold text-[#2A2A2A]">₹29,999</span>
                 <span className="text-gray-400 line-through font-medium text-lg">₹38,000</span>
               </div>
               <ul className="space-y-4 mb-8">
                 {["Luxury HD/Airbrush Makeup", "Premium Hairstyling", "Saree Draping", "Bridal Nail Styling", "Full Touch-Up Kit", "Complimentary Trial", "Premium Skin Preparation"].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                     <span className="text-sm text-gray-700">{feature}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pre-groom Packages Section */}
      <section className="w-full bg-white relative">
        <div className="max-w-[1400px] mx-auto">
           {/* Section Title outside the flex container to match layout */}
           <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
              <h2 className="text-3xl font-extrabold text-[#2A2A2A]">
                Pre-groom Packages
              </h2>
              {/* Decorative Gold Splash */}
              <div className="hidden md:flex absolute top-12 right-0 lg:right-24 items-center justify-center">
                 <div className="bg-[#E5C158] text-white font-extrabold text-lg py-2 px-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-sm rounded-bl-sm shadow-md transform -rotate-12">
                   Groom<br/>Special!
                 </div>
              </div>
           </div>

           <div className="flex flex-col lg:flex-row items-stretch">
             {/* Image Left */}
             <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0">
               <Image 
                 src="/gallery/gallery13.jpeg" 
                 alt="Groom Makeup"
                 fill
                 className="object-cover lg:rounded-r-full lg:pr-12"
               />
               {/* Decorative background shapes mimicking the image */}
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200 rounded-full -translate-x-1/2 translate-y-1/2 mix-blend-multiply opacity-50 hidden lg:block" />
             </div>

             {/* Card Right */}
             <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-12 lg:pr-24 flex items-center">
                <div className="w-full bg-[#F4EFEA] rounded-2xl p-8 sm:p-10 shadow-sm relative">
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Groom Package 1</p>
                   <div className="flex items-baseline gap-3 mb-8">
                     <span className="text-3xl font-extrabold text-[#2A2A2A]">₹14,999</span>
                     <span className="text-gray-400 line-through font-medium text-lg">₹18,000</span>
                   </div>
                   <ul className="space-y-5 mb-10">
                     {["HD Groom Makeup", "Hair Styling & Setting", "Beard Trim & Setting", "Skin Glowing Facial", "Nail Care & Manicure"].map((feature, i) => (
                       <li key={i} className="flex items-start gap-4">
                         <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                         <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                       </li>
                     ))}
                   </ul>
                   <Link href="/book-appointment" className="inline-block bg-[#1A1A1A] text-white font-bold py-3 px-8 rounded text-sm hover:bg-black transition-colors">
                     Book Now
                   </Link>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 4. Stats Bar */}
      <section className="w-full bg-[#EFE9E2] py-12 border-y border-[#e2d8ce]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-300">
            <div className="flex flex-col items-center justify-center px-4">
               <Smile className="w-8 h-8 text-[#2A2A2A] mb-3" strokeWidth={1.5} />
               <p className="font-extrabold text-[#2A2A2A] text-lg">100K+ Smiles</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
               <Users className="w-8 h-8 text-[#2A2A2A] mb-3" strokeWidth={1.5} />
               <p className="font-extrabold text-[#2A2A2A] text-lg">30+ Makeup<br/>Artists</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
               <MapPin className="w-8 h-8 text-[#2A2A2A] mb-3" strokeWidth={1.5} />
               <p className="font-extrabold text-[#2A2A2A] text-lg">5+ Stores<br/>Across Hyd</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
               <Award className="w-8 h-8 text-[#2A2A2A] mb-3" strokeWidth={1.5} />
               <p className="font-extrabold text-[#2A2A2A] text-lg">20+ Years of<br/>Legacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bridal Packages (Collage Left, Card Right) */}
      <section className="w-full bg-[#F4EFEA] relative">
        <div className="max-w-[1400px] mx-auto">
           <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
              <h2 className="text-3xl font-extrabold text-[#2A2A2A]">
                Bridal Packages
              </h2>
              {/* Decorative Gold Splash */}
              <div className="hidden md:flex absolute top-12 right-0 lg:right-24 items-center justify-center">
                 <div className="bg-[#E5C158] text-white font-extrabold text-lg py-2 px-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-sm rounded-bl-sm shadow-md transform -rotate-12">
                   Bridal<br/>Special!
                 </div>
              </div>
           </div>

           <div className="flex flex-col lg:flex-row items-stretch px-4 sm:px-6 lg:px-8 pb-16 gap-8">
             {/* Collage Left */}
             <div className="w-full lg:w-5/12 grid grid-cols-2 gap-2 h-[400px] sm:h-[500px]">
               <div className="relative h-full w-full rounded-l-lg overflow-hidden">
                 <Image 
                   src="/gallery/gallery4.jpeg" 
                   alt="Bridal Look 1"
                   fill
                   className="object-cover"
                 />
               </div>
               <div className="grid grid-rows-2 gap-2 h-full">
                  <div className="relative h-full w-full rounded-tr-lg overflow-hidden">
                    <Image 
                      src="/gallery/gallery5.jpeg" 
                      alt="Bridal Look 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-full w-full rounded-br-lg overflow-hidden">
                    <Image 
                      src="/gallery/gallery6.jpeg" 
                      alt="Bridal Look 3"
                      fill
                      className="object-cover"
                    />
                  </div>
               </div>
             </div>

             {/* Card Right */}
             <div className="w-full lg:w-7/12 flex items-center">
                <div className="w-full bg-[#EFE9E2] rounded-2xl p-8 sm:p-10 shadow-sm relative">
                   <p className="text-gray-700 leading-relaxed font-medium mb-8">
                     Our Premium Bridal Packages are designed to make you feel completely radiant on your special day. Tailored to your unique style and vision.
                   </p>
                   <ul className="space-y-4 mb-10">
                     {["Advanced HD and Airbrush Makeup techniques", "Customized hair styling tailored to your face shape and outfit", "Premium quality luxury products for long-lasting flawless finish", "Dedicated trial sessions to ensure complete satisfaction", "Pre-bridal skin and hair therapy sessions", "On-location services for maximum comfort"].map((feature, i) => (
                       <li key={i} className="flex items-start gap-4">
                         <Check className="w-5 h-5 text-[#8B624C] shrink-0 mt-0.5" strokeWidth={3} />
                         <span className="text-sm text-gray-800 font-medium">{feature}</span>
                       </li>
                     ))}
                   </ul>
                   <Link href="/book-appointment" className="inline-block bg-[#1A1A1A] text-white font-bold py-3 px-8 rounded text-sm hover:bg-black transition-colors">
                     View All Packages
                   </Link>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 6. Full-Width Banner Image */}
      <section className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative">
         <Image 
           src="/gallery/gallery7.jpeg"
           alt="Hair styling process"
           fill
           className="object-cover object-center"
         />
      </section>

      {/* 7. Bridal Makeup Portfolio */}
      <section className="w-full bg-[#F4EFEA] py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A2A2A] mb-12">
            Bridal Makeup Portfolio
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              "/gallery/gallery8.jpeg",
              "/gallery/gallery9.jpeg",
              "/gallery/gallery10.jpeg",
              "/gallery/gallery11.jpeg",
              "/gallery/gallery12.jpeg",
              "/gallery/gallery14.jpeg",
            ].map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] bg-white border-[8px] border-white shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <Image
                  src={src}
                  alt={`Bridal Portfolio ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bridal Stories (Testimonials) */}
      <section className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2A2A2A] mb-4">
              Bridal Stories
            </h2>
            <div className="flex justify-center">
              <Quote className="w-10 h-10 text-gray-300 fill-gray-300" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The makeup looked flawless throughout my wedding day. The team was professional and incredibly supportive. Everyone loved the look and I felt incredibly confident.",
                name: "Neha Sharma",
                image: "/gallery/gallery15.jpeg"
              },
              {
                text: "I loved how they customized the entire look according to my outfit and skin tone. The pre-bridal sessions really helped my skin glow naturally on the big day.",
                name: "Priya Reddy",
                image: "/gallery/gallery16.jpeg"
              },
              {
                text: "One of the best bridal experiences I've ever had. Highly recommended for any bride who wants a stress-free, luxurious makeup session that lasts all day without caking.",
                name: "Anjali Menon",
                image: "/gallery/gallery17.jpeg"
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-[#F4EFEA] rounded-xl p-8 flex flex-col h-full">
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  "{story.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <Image src={story.image} alt={story.name} fill className="object-cover" />
                  </div>
                  <p className="font-bold text-[#2A2A2A] text-sm">{story.name}</p>
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
