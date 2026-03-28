interface Article {
  id: string;
  title: string;
  authors: {
    affiliation: string;
    country: string;
    firstName: string;
    lastName: string;
    title: string;
  }[];
  abstract: string;
  createdAt: string;
  fileUrl: string;
}
interface ArticleSubmissions {
  articles: Article[];
}

const ArticleSubmissions = ({ articles }: ArticleSubmissions) => {
  return (
    <div className="p-6 min-h-screen flex-1">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Submitted Articles
      </h1>
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Authors
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Date Submitted
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                File
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles?.length > 0 ? (
              articles?.map((article) => (
                <tr key={article.id}>
                  <td className="px-6 py-4  text-sm font-medium text-gray-900">
                    {article.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {article?.authors?.map((author, index) => (
                      <div key={index} className="mb-2">
                        <span className="font-semibold">
                          {author.firstName} {author.lastName}
                        </span>
                        {author.title && ` (${author.title})`}
                        <br />
                        <span className="text-gray-500 text-xs">
                          {author.country}
                        </span>
                      </div>
                    ))}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <a
                      href={article.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-gray-400 text-lg"
                >
                  No articles submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArticleSubmissions;
