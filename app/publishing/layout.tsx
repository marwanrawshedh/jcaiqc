"use client";
import { useAuth } from "../providers/authProvider";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useLayoutEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn, router]);
  return <>{children}</>;
}
