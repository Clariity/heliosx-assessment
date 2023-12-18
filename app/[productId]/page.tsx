import Image from "next/image";
import Link from "next/link";

import { titleCase } from "@/lib/utils";

type Props = {
  params: {
    productId: string;
  };
};

export default function Product({ params: { productId } }: Props) {
  return (
    <main className="relative -mx-16 flex flex-col justify-center items-center">
      <div className="w-full h-80 ">
        <Image
          className="object-cover brightness-75"
          src="/pears.jpg"
          fill
          alt="genovian pears in tree"
        />
      </div>

      <div className="absolute top-28">
        <h1 className="text-3xl font-semibold text-primary-fg text-center mb-10">
          {titleCase(productId)}
        </h1>
        <Link
          className="bg-primary-bg text-primary-fg text-2xl px-4 py-2 rounded-md hover:brightness-90"
          href={`/${productId}/consultation`}
        >
          Start Consultation
        </Link>
      </div>
    </main>
  );
}
