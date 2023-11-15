import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-screen ">
      <figure className="w-full h-full absolute">
        <Image
          src="/headerBackground.png"
          alt=""
          className="w-full h-screen "
          width={1920}
          height={1080}
        />
      </figure>

      <div className="absolute w-full">
        <div className="mx-4 md:mx-auto  md:w-3/4">
          <p className="text-md md:text-5xl text-blue-800 drop-shadow-sm mt-10 md:mt-60">
            Transforma tus
          </p>
          <p className="text-md md:text-5xl text-blue-800 drop-shadow-sm">
            espacios con los
          </p>
          <h1
            className={`text-2xl md:text-5xl mt-4 md:mt-1  text-blue-800 mb-14`}
          >
            Pisos de resina epóxica
          </h1>
          <Link
            href="/resinas"
            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Ver resinas epóxicas <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
