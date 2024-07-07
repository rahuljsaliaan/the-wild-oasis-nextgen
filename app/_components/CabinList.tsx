// import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "@/app/_lib/services/data-service";
import CabinCard from "@/app/_components/CabinCard";
import { Capacities } from "@/app/_lib/types/enums.types";
import { Cabin } from "@/app/_lib/types/models.types";

type CabinListProps = {
  filter: Capacities;
};

async function CabinList({ filter = Capacities.All }: CabinListProps) {
  // EXPL: Enables partial pre-rendering when wrapped in suspense component
  // noStore();

  const cabins = (await getCabins()) as Cabin[];

  if (!cabins.length) {
    return null;
  }

  const capacityFilters: { [key in Capacities]: (cabin: Cabin) => boolean } = {
    [Capacities.Small]: (cabin: Cabin) => (cabin?.maxCapacity ?? 0) <= 3,
    [Capacities.Medium]: (cabin: Cabin) =>
      (cabin?.maxCapacity ?? 0) >= 4 && (cabin?.maxCapacity ?? 0) <= 7,
    [Capacities.Large]: (cabin: Cabin) => (cabin?.maxCapacity ?? 0) >= 8,
    [Capacities.All]: () => true,
  };

  const filterFunction =
    capacityFilters[filter] || capacityFilters[Capacities.All];
  const displayedCabins = cabins.filter(filterFunction);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
