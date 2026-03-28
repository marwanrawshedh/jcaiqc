"use client";
import UsersList from "../components/UsersList";
import { useGetUsers } from "../api/users/get";

const PublicationEthics = () => {
  const { data } = useGetUsers();

  return <UsersList users={data || []} />;
};

export default PublicationEthics;
