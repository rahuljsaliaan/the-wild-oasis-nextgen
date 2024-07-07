import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import { getCabinsCount } from "@/app/_lib/services/data-service";

export const revalidate = 3600;

export default async function Page() {
  const cabinsCount = (await getCabinsCount()) || 0;

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabinsCount} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={about1}
          alt="Family sitting around a fire pit in front of cabin"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="col-span-2">
        <Image
          src={about2}
          alt="Family that manages The Wild Oasis"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Guest Reflections: A Family&apos;s Journey in the Indian Dolomites
        </h1>

        <div className="space-y-8">
          <p>
            Our magical stay in the Indian Dolomites cabins was a perfect family
            getaway, complete with breathtaking views and cozy charm. The
            hosts&apos; unparalleled warmth and hospitality ensured a memorable
            experience, providing everything from trail guides to local
            delicacies.
          </p>
          <p>
            As we left, we all agreed it was one of our most cherished
            vacations, promising a return to this peaceful escape that felt like
            a home away from home.
          </p>

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
