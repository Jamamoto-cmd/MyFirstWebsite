"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Project 1", href: "/1" },
  { name: "Project 2", href: "/2" },
  { name: "Project 3", href: "/3" },
];

const SideNavBar = () => {
  //Use the useRouter hook to access the current path
  const pathname = usePathname();

  return (
    <div className="bg-gray-800 min-w-fit w-1/5 h-auto">
      <div className="flex flex-col items-left p-5">
        <h1 className="text-xl">Projekte</h1>
        <div className="flex flex-col items-center">
          {navLinks.map((link) => {
            //Profe if the href of the links are the current path
            const isActive = pathname.startsWith("/projects" + link.href);

            return (
              <Link
                href={"/projects" + link.href}
                key={link.name}
                className={isActive ? "font-bold mb-3 text-green-500" : "mb-3"}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
