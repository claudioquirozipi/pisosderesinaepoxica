import { Resin } from "@/app/data/resins";
// import Image from "next/image";

interface Props {
  resin: Resin;
}

function limitarString(str: string, limite: number) {
  if (str.length <= limite) return str;
  return str.slice(0, limite) + "...";
}

export default function Card({ resin }: Props) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
      <img
        // width={200}
        // height={200}
        className="w-full"
        src={resin.img}
        alt={resin.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{resin.title}</div>
        <p className="text-gray-700 text-base">
          {limitarString(resin.description, 70)}
        </p>
        <p className="text-gray-700 text-base font-bold mt-2">${resin.price}</p>
      </div>
      <div className="px-6 py-4">
        <a
          href={resin.purchaseLink}
          target="_blank"
          className="block bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Comprar en Amazon
        </a>
      </div>
    </div>
  );
}
