type KeywordsSectionProps = {
  keywords: string[];
};
const KeywordsSection = ({ keywords }: KeywordsSectionProps) => {
  return (
    <div className=" mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-md font-semibold text-gray-800  mb-2">Keywords</h3>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KeywordsSection;
