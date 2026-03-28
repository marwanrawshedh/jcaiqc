const fetchStatistic = async (): Promise<{
  publishedCount: number;
  authors: number;
  authorsDistribution: number;
  googleCitationNumber: number;
  scopusCitationNumber: number;
}> => {
  try {
    const [response1] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/statistic/get-statistics`, {
        cache: "no-store",
      }),
    ]);
    if (!response1.ok) throw new Error("Request failed");
    const [journal1] = await Promise.all([response1.json()]);
    return (
      journal1 || {
        publishedCount: 0,
        authors: 0,
        authorsDistribution: 0,
        googleCitationNumber: 0,
        scopusCitationNumber: 0,
      }
    );
  } catch (error) {
    console.log("Error fetching statistics:", error);
    return {
      publishedCount: 0,
      authors: 0,
      authorsDistribution: 0,
      googleCitationNumber: 0,
      scopusCitationNumber: 0,
    };
  }
};

const fetchArticlesNumber = async (): Promise<{ publishedCount: number }> => {
  try {
    const [response1] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/article/published/count`, { cache: "no-store" }),
    ]);
    if (!response1.ok) throw new Error("Request failed");
    return await response1.json();
  } catch (error) {
    return { publishedCount: 0 };
  }
};

const fetchTotalViewsNumber = async (): Promise<{ totalViews: number }> => {
  try {
    const [response1] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/article/views/total`, {
        cache: "no-store",
        next: { revalidate: 0 },
      }),
    ]);
    if (!response1.ok) throw new Error("Request failed");
    return await response1.json();
  } catch (error) {
    return { totalViews: 0 };
  }
};

const Statistic = async () => {
  const {
    authors,
    authorsDistribution,
    googleCitationNumber,
    scopusCitationNumber,
  } = await fetchStatistic();
  const { publishedCount } = await fetchArticlesNumber();
  const { totalViews } = await fetchTotalViewsNumber();

  const statistics = [
    { label: "Articles", value: publishedCount },
    { label: "Total Views", value: totalViews },
    { label: "Citations (Scopus)", value: scopusCitationNumber },
    { label: "Citations (Google Scholar)", value: googleCitationNumber },
    { label: "Authors", value: authors },
    { label: "Authors Distribution", value: authorsDistribution },
    { label: "Acceptance Rate", value: "40%" },
  ];

  return (
    <section className="flex flex-col gap-6 my-10" aria-labelledby="statistics-heading">
      <div className="flex items-center border-b border-gray-200 pb-3">
        <h2 id="statistics-heading" className="text-2xl font-bold font-heading text-primary tracking-tight">
          Journal Metrics
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {statistics.map((stat, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-accent hover:shadow-sm transition-all duration-300 ease-in-out"
          >
            <p className="text-3xl font-bold text-primary font-heading tracking-tight mb-2 group-hover:text-accent transition-colors">
              {stat.value.toLocaleString()}
            </p>
            <p className="text-sm font-medium text-gray-600 leading-snug uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistic;
