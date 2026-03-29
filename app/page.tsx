import type { Metadata } from "next";
import ArticleCard from "./components/ArticleCard";
import JournalInfoTable from "./components/JournalInfoTable";
import { common } from "./constants/common";
// import CallForPaper from "./components/CallForPaper";
import Statistic from "./components/Statistics";
// import JournalNewsSection from "./components/JournalNews";

export const metadata: Metadata = {
  verification: { google: "6LfuMp0sAAAAAD1sk1MLG7HPtUjITZgs06FWJEw7" },
  title: common.JournalTitle,
  description:
    "The Journal of Cybersecurity in AI and Quantum Computing (JCSRA) is a peer-reviewed open access academic journal publishing research in cybersecurity, cyber risk auditing, information security, and governance. Indexed in Scopus, Crossref, and Google Scholar.",
};
const Home = () => {
  return (
    <div className="flex flex-col gap-16 lg:gap-24 transition duration-500 ease-in-out pb-16 pt-4 lg:pt-8 w-full">
      <section className="w-full" aria-label="Journal Information">
        <JournalInfoTable />
      </section>
      <section className="w-full">
        <Statistic />
      </section>
      {/* <section className="w-full">
        <JournalNewsSection />
      </section> */}
      <section className="w-full">
        <ArticleCard />
      </section>
    </div>
  );
};

export default Home;
