import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col w-full items-center my-2 md:my-10 text-black gap-2 md:gap-8"
    >
      <h3 className="font-roboto font-semibold text-xl 2xl:text-3xl">
        CONTACT
      </h3>
      <div className="flex flex-col md:flex-row justify-evenly p-5 font-roboto w-full max-w-[1200px] gap-5 md:gap-0">
        <div className="flex flex-col md:gap-4">
          <div className="flex gap-3 items-center">
            <Image
              src="/icons/map.svg"
              alt="map_icon"
              width={50}
              height={50}
              className="h-4 w-4 md:h-6 md:w-6"
            />
            <h5 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
              OFICE ADDRESS
            </h5>
          </div>
          <p className="text-sm md:text-base 2xl:text-lg">
            8211 37th Ave, Jackson Heights, NY 11372.
          </p>
        </div>
        <div className="flex flex-col md:gap-4">
          <div className="flex gap-3 items-center">
            <Image
              src="/icons/phone.svg"
              alt="map_icon"
              width={50}
              height={50}
              className="h-4 w-4 md:h-6 md:w-6"
            />
            <h5 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
              TOLL FREE NUMBER
            </h5>
          </div>
          <p className="text-sm md:text-base 2xl:text-lg">+ 1 (718) 880-4080</p>
        </div>
        <div className="flex flex-col md:gap-4">
          <div className="flex gap-3 items-center">
            <Image
              src="/icons/email.svg"
              alt="map_icon"
              width={50}
              height={50}
              className="h-4 w-4 md:h-6 md:w-6"
            />
            <h5 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
              SEND MAIL
            </h5>
          </div>
          <p className="text-sm md:text-base 2xl:text-lg">
            sales@neatservicescorp.com
          </p>
        </div>
      </div>
    </section>
  );
}
