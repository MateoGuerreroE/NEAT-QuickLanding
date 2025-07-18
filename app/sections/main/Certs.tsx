import Image from "next/image";
import React from "react";

export default function Certs() {
  return (
    <section id="about" className="flex flex-col">
      <div className="bg-[#f86f5e] p-5 flex flex-col gap-3 text-zinc-900 text-center">
        <div className="flex flex-col font-roboto text-xl md:text-2xl 2xl:text-3xl font-bold">
          <h2>CALL TODAY FOR A ESTIMATE!</h2>
          <p>(718) 880-4080</p>
        </div>
        <p className="text-lg md:text-xl 2xl:text-2xl">
          Same-Day Appointments Available
        </p>
      </div>
      <div className="h-[200px] md:h-[350px] bg-zinc-200 flex flex-col gap-3 justify-evenly items-center text-black font-roboto p-5 md:p-10">
        <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
          CERTIFICATIONS
        </h2>
        <div className="flex gap-1 md:gap-7 items-center justify-center">
          <Image
            src="/logos/GAF.png"
            alt="GAF_Certification"
            width={200}
            height={200}
            className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36"
          />
          <Image
            src="/logos/SilverStar.png"
            alt="SilverStar_Certification"
            width={200}
            height={200}
            className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40"
          />
          <Image
            src="/logos/ContractorDirector.png"
            alt="ContractorDirector_Logo"
            width={200}
            height={200}
            className="h-16 w-24 sm:h-20 sm:w-30 md:h-28 md:w-42"
          />
        </div>
      </div>
      <div className="flex flex-col items-center" id="reviews">
        <div className="text-black font-roboto p-5 md:pt-10 text-center">
          <h2 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-md md:text-xl 2xl:text-2xl">
            Let people speak for us!
          </p>
        </div>
        <div className="overflow-hidden mt-2 mb-10">
          <div className="p-5 max-w-[1000px] 2xl:max-w-[1300px] -my-16">
            <script
              src="https://static.elfsight.com/platform/platform.js"
              async
            ></script>
            <div
              className="elfsight-app-16d86d15-99ee-4731-90dc-b72eebc8ded7"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
