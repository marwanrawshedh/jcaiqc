// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { newsItems } from "../../constants/news";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params; //
  const news = newsItems.find((item) => item.slug === slug);

  if (!news) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <Image
        src={news.image}
        alt={news.title}
        width={400}
        height={500}
        className="rounded-2xl mb-8 object-cover"
      />
      <p className="text-sm text-gray-500 mb-2">{news.date}</p>
      <h1 className="text-3xl font-bold mb-6">{news.title}</h1>
      <div
        className="prose prose-lg max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
    </article>
  );
}
