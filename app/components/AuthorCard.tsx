import Image from "next/image";

type AuthorCardProps = {
  email?: string;
  name: string;
  description: string;
  type?: string;
  img: React.ReactNode;
  scholar?: string;
  orcid?: string;
};

const AuthorCard = ({
  email,
  description,
  name,
  scholar,
  img,
  orcid,
}: AuthorCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white border border-gray-200 hover:border-accent/40 transition-colors shadow-sm relative group h-full">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-full overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center">
          {img}
        </div>
      </div>
      
      <div className="flex flex-col flex-1 h-full">
        <h3 className="text-lg font-bold font-heading text-primary leading-tight mb-1.5 group-hover:text-accent transition-colors">
          {name}
        </h3>
        
        <div className="text-xs sm:text-sm font-medium text-gray-600 leading-relaxed mb-5">
          <p>{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-gray-100">
          {email && (
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest" aria-label="Email">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Email
            </a>
          )}
          {scholar && (
            <a href={scholar} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest" aria-label="Google Scholar">
              <Image width={14} height={14} src={"/logos/google.svg"} alt="" className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all opacity-70 group-hover:opacity-100" />
              Scholar
            </a>
          )}
          {orcid && (
            <a href={orcid} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest" aria-label="ORCID">
              <Image width={14} height={14} src={"/logos/orcid.svg"} alt="" className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all opacity-70 group-hover:opacity-100" />
              ORCID
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
