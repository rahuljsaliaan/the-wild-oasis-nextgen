"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Capacities, Capacity } from "@/app/_lib/types/enums.types";

function Filter() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function createFilterURL(filter: Capacities) {
    return `${pathName}?${Capacity.default}=${filter}`;
  }

  const filterOptions = [
    { capacity: Capacities.All, label: "All cabins" },
    { capacity: Capacities.Small, label: "1—3 guests" },
    { capacity: Capacities.Medium, label: "4—7 guests" },
    { capacity: Capacities.Large, label: "8—12 guests" },
  ];

  return (
    <div className="border border-primary-800 flex">
      {filterOptions.map(({ capacity, label }) => (
        <LinkButton
          key={capacity}
          href={createFilterURL(capacity)}
          isActive={capacity === searchParams.get(Capacity.default)}
        >
          {label}
        </LinkButton>
      ))}
    </div>
  );
}

type LinkButtonProps = {
  href: string;
  isActive?: boolean;
  children: string;
};

function LinkButton({ href, isActive = false, children }: LinkButtonProps) {
  return (
    <Link
      className={`px-5 py-2 hover:bg-primary-700 ${
        isActive ? "bg-primary-700 text-primary-50" : ""
      }`}
      scroll={false}
      href={href}
    >
      {children}
    </Link>
  );
}

export default Filter;
