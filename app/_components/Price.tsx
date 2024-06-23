import { getCabinPrice } from "@/app/_lib/services/data-service";

type PriceProps = {
  cabinId: number;
};

async function Price({ cabinId }: PriceProps) {
  const cabin = await getCabinPrice(cabinId)!;

  return (
    <p className="mt-12 text-3xl flex gap-3 items-baseline">
      {cabin?.discount && cabin?.discount > 0 ? (
        <>
          <span className="text-3xl font-[350]">
            $
            {cabin?.regularPrice &&
              cabin.discount &&
              cabin?.regularPrice - cabin?.discount}
          </span>
          <span className="line-through font-semibold text-primary-600">
            ${cabin?.regularPrice}
          </span>
        </>
      ) : (
        <span className="text-3xl font-[350]">${cabin?.regularPrice}</span>
      )}
      <span className="text-primary-200">/ night</span>
    </p>
  );
}

export default Price;
