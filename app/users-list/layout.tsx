"use client";
import { useAuth } from "../providers/authProvider";
import { redirect } from "next/navigation";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) redirect("/");
  return children;
}
