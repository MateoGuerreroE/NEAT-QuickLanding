import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black p-5 text-white flex justify-center">
      <div className="flex flex-row flex-wrap items-center sm:justify-evenly gap-10 md:gap-12 max-w-[1000px] w-full">
        <div className="w-1/2">
          <Image
            src="/logos/NEAT-color.png"
            alt="neat_logo"
            width={200}
            height={200}
            className="h-24 w-24"
          />
        </div>
        <div className="font-roboto flex flex-col gap-3">
          <h4 className="font-semibold">SCHEDULE</h4>
          <div className="flex flex-col gap-3 text-[11px]">
            <p>Monday to Friday</p>
            <p>9:00 AM to 5:00PM NYC Time</p>
          </div>
        </div>
        <div className="font-roboto flex flex-col gap-3">
          <h4 className="font-semibold">GET IN TOUCH</h4>
          <div className="flex flex-col gap-3 text-[11px]">
            <div className="flex gap-3">
              <Image
                src="/icons/map.svg"
                alt="map_icon"
                width={50}
                height={50}
                className="h-4 w-4"
              />
              <p>8211 37th Ave, Jackson Heights, NY 11372.</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/icons/phone.svg"
                alt="phone_icon"
                width={50}
                height={50}
                className="h-4 w-4"
              />
              <p>+ 1 (718) 880-4080</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/icons/email.svg"
                alt="email_icon"
                width={50}
                height={50}
                className="h-4 w-4"
              />
              <p>sales@neatservicescorp.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
