import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black p-5 md:py-10 text-white flex justify-center">
      <div className="flex flex-row flex-wrap items-center sm:justify-evenly gap-10 md:gap-12 max-w-[1000px] 2xl:max-w-[1200px] w-full">
        <div className="w-1/2 md:w-[20%]">
          <Image
            src="/logos/NEAT-color.png"
            alt="neat_logo"
            width={200}
            height={200}
            className="h-24 w-24 md:h-36 md:w-36"
          />
        </div>
        <div className="font-roboto flex flex-col gap-3">
          <h4 className="font-semibold md:text-xl 2xl:text-2xl">SCHEDULE</h4>
          <div className="flex flex-col gap-3 text-[11px] md:text-base xl:text-lg">
            <p>Monday to Friday</p>
            <p>9:00 AM to 5:00PM NYC Time</p>
          </div>
        </div>
        <div className="font-roboto flex flex-col gap-3">
          <h4 className="font-semibold">GET IN TOUCH</h4>
          <div className="flex flex-col gap-3 text-[11px] md:text-base xl:text-lg">
            <div className="flex gap-3">
              <Image
                src="/icons/map.svg"
                alt="map_icon"
                width={50}
                height={50}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p>8211 37th Ave, Jackson Heights, NY 11372.</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/icons/phone.svg"
                alt="phone_icon"
                width={50}
                height={50}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p>+ 1 (718) 880-4080</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/icons/email.svg"
                alt="email_icon"
                width={50}
                height={50}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p>neatservicescorp@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
