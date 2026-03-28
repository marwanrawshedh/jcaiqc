"use client";
import AuthorCard from "../components/AuthorCard";
import Image from "next/image";
import { useEditorialMembers } from "../api/editorial-team/get";
import Skeleton from "../components/Skeleton";

const EditorialTeam = () => {
  const { data, isPending } = useEditorialMembers();

  if (isPending) return <div className="py-20 max-w-screen-xl mx-auto w-full"><Skeleton /></div>;

  const getMembers = (roleType: string) => data?.filter(({ type }) => type === roleType) || [];

  const renderSection = (title: string, roleType: string, isEIC: boolean = false) => {
    const members = getMembers(roleType);
    if (!members.length) return null;

    return (
      <section className="mb-16" aria-labelledby={`role-${roleType}`}>
        <div className="flex items-center border-b-2 border-primary pb-3 mb-8">
          <h2 id={`role-${roleType}`} className="text-xl sm:text-2xl font-bold font-heading text-primary uppercase tracking-wide">
            {title}
          </h2>
        </div>
        
        <div className={`grid gap-6 ${isEIC ? "grid-cols-1 lg:grid-cols-2 lg:max-w-5xl" : "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"}`}>
          {members.map(({ email, fileUrl, firstName, googleLink, lastName, orcid, title: prefix, affiliation }) => (
            <AuthorCard
              key={`${prefix} ${firstName} ${lastName}`}
              img={
                <Image
                  className="object-cover"
                  src={fileUrl}
                  alt={`${prefix} ${firstName} ${lastName}`}
                  fill
                  sizes="(max-width: 768px) 100px, 150px"
                />
              }
              description={affiliation}
              email={email}
              name={`${prefix.charAt(0).toUpperCase() + prefix.slice(1)}. ${firstName} ${lastName}`}
              scholar={googleLink}
              orcid={orcid}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-primary leading-tight mb-4 tracking-tight">
          Editorial Board
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          The editorial board ensures the highest standards of scientific rigor, coordinating global peer review and shaping the strategic focus of the journal.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {renderSection("Editor in Chief", "editorInChief", true)}
        {renderSection("Managing Editor", "coEditorInChief")}
        {renderSection("Associate Editors", "associateEditor")}
      </div>
    </div>
  );
};

export default EditorialTeam;
