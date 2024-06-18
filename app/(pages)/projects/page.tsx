"use client";

import { usePathname } from "next/navigation";

export default function Projects() {
  const currentPath = usePathname();

  return (
    <>
      <div className="w-full">{currentPath}</div>
    </>
  );
}
