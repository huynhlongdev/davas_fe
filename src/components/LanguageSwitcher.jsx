"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const isVi = pathname === "/vi";

  return (
    <div className="ml-4.5 flex items-center gap-2 border border-border rounded-[5px] text-t3 text-sm font-medium leading-2 py-2 px-2.5 uppercase">
      <button
        type="button"
        onClick={() => router.push("/")}
        className={`cursor-pointer ${!isVi ? "text-red" : "text-t1"}`}
      >
        EN
      </button>

      <span>|</span>

      <button
        type="button"
        onClick={() => router.push("/vi")}
        className={`cursor-pointer ${isVi ? "text-red" : "text-t1"}`}
      >
        VI
      </button>
    </div>
  );
}
