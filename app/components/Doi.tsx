type CitationBoxProps = {
  doi: string;
};
const Doi = ({ doi }: CitationBoxProps) => {
  return (
    <div className="mt-6 p-4 border-l-4 border-blue-500 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-blue-700 mb-2">Doi Link</h3>
      <p className="text-gray-800 text-sm leading-relaxed">
        <a
          href={doi}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-all"
        >
          {doi}
        </a>
      </p>
    </div>
  );
};

export default Doi;
