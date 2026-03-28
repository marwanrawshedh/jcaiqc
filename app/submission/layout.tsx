"use client";
import { useAuth } from "../providers/authProvider";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoggedIn } = useAuth();

  return <>{isLoggedIn ? children : <></>}</>;
}
