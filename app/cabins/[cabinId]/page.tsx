import TextExpander from "@/app/_components/TextExpander";
import { getCabin, getCabins } from "@/app/_lib/services/data-service";
import {
  DynamicRouteParam,
  GenerateMetadataFunc,
  GenerateStaticParamsFunc,
} from "@/app/_lib/types/utilities.types";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

type CabinPageProps = DynamicRouteParam<{ cabinId: string }>;

export const generateMetadata: GenerateMetadataFunc<{
  cabinId: string;
}> = async ({ params }) => {
  const cabin = await getCabin(parseInt(params.cabinId));

  return { title: `Cabin ${cabin?.name}` };
};

export const generateStaticParams: GenerateStaticParamsFunc<{
  cabinId: string;
}> = async () => {
  const cabins = await getCabins();

  const cabinIds: { cabinId: string }[] = [];

  if (cabins.length) {
    cabinIds.push(...cabins.map((cabin) => ({ cabinId: String(cabin.id) })));
  }

  return cabinIds;
};

export default async function Page({ params }: CabinPageProps) {
  const cabin = await getCabin(parseInt(params.cabinId));

  if (!cabin?.name) notFound();

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image || ""}
            className="object-cover"
            fill
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description || ""}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (India)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
