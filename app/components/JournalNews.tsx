import Image from "next/image";
import Link from "next/link";
import { newsItems } from "../constants/news";

export default function JournalNewsSection() {
  return (
    <section className="py-12" aria-labelledby="news-heading">
      <div className="flex items-center justify-between border-b-2 border-primary mb-8 pb-3">
        <h2 id="news-heading" className="text-2xl sm:text-3xl font-bold font-heading text-primary tracking-tight">
          Journal News &amp; Announcements
        </h2>
        <Link href="/news" className="text-sm font-semibold text-accent hover:underline hidden sm:block">
          View all news <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="flex flex-col border-b border-gray-200">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-t border-gray-200 first:border-0 relative"
          >
            {/* Date Column (Editorial Style) */}
            <div className="md:col-span-2 flex flex-col pt-1">
              <time className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest border-l-2 border-accent pl-3">
                {item.date}
              </time>
            </div>

            {/* Content Column */}
            <div className="md:col-span-10 flex flex-col sm:flex-row gap-8">
               <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                    <Link href={`/news/${item.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0 z-10 aria-hidden"></span>
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 md:mt-6 inline-flex items-center text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                    Read announcement <span aria-hidden="true" className="ml-1">&rarr;</span>
                  </div>
               </div>
               
               {/* Image Column (Right aligned, strictly boxed) */}
               <div className="relative w-full sm:w-48 xl:w-56 aspect-[4/3] flex-shrink-0 bg-gray-50 border border-gray-100 p-1 hidden sm:block">
                 <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105 transform"
                    />
                 </div>
               </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-6 sm:hidden">
        <Link href="/news" className="text-sm font-semibold text-accent hover:underline flex items-center justify-center py-2">
          View all news <span aria-hidden="true" className="ml-1">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
