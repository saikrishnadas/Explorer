import Head from "next/head";
import Avatar from "../components/Avatar";

import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Explorer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full justify-between p-5 text-sm text-gray-700">
        <div className="flex space-x-5 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-5 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F30836867%3Fs%3D400%26v%3D4&f=1&nofb=1" />
        </div>
      </header>

      <form>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Iq_AG0Nci05ecwQDcL8csAHaCg%26pid%3DApi&f=1"
          alt="logo"
          height={100}
          width={300}
        />
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
        rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" className="flex-grow focus:outline-none" />
        </div>
      </form>
    </div>
  );
}
