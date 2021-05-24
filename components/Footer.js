import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="flex justify-center items-center px-8 py-3 hover:text-gray-900">
        <LocationMarkerIcon className="h-5 mr-2 " />
        <p>India</p>
      </div>
    </footer>
  );
}

export default Footer;
