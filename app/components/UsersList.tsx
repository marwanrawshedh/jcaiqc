interface User {
  id: string;
  country: string;
  firstName: string;
  lastName: string;
  email: string;
  // createdAt: Date;
  verified: string;
}
interface UsersList {
  users: User[];
}

const UsersList = ({ users }: UsersList) => {
  return (
    <div className="p-6 min-h-screen flex-1">
      <h1 className="text-3xl font-bold mb-6 text-center">Users List</h1>
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Email
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Registered In
              </th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.length > 0 ? (
              users?.map(
                ({
                  id,
                  country,
                  email,
                  firstName,
                  lastName,
                  // createdAt,
                  verified,
                }) => (
                  <tr key={id}>
                    <td className="px-6 py-4  text-sm font-medium text-gray-900">
                      {firstName} {lastName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {email}
                    </td>

                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(createdAt).toLocaleDateString()}
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {country}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {verified ? "Active" : "Not Active"}
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-gray-400 text-lg"
                >
                  No Users Registered Yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
