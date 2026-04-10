"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { config } from "@/data/config";

export function PasswordGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    // Skip protection if disabled or on special pages
    if (!config.security.enabled || pathname === "/password" || pathname === "/error") {
      setIsAuthorized(true);
      return;
    }

    const auth = localStorage.getItem("event_auth");
    if (auth === "true") {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
      router.push("/password");
    }
  }, [pathname, router]);

  // Prevent flicker by showing nothing until auth check is done
  if (isAuthorized === null) return <div className="min-h-screen bg-[var(--color-brand-light)]" />;

  // If not authorized and on a protected page, return null (push will handle redirect)
  if (!isAuthorized && !["/password", "/error"].includes(pathname)) {
    return null;
  }

  return <>{children}</>;
}
