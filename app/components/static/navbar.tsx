"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./navbar.module.css";

export type NavBarSelection =
  | "home"
  | "about"
  | "contact"
  | "gallery"
  | "reviews";

function NavBarDivider() {
  return <div className="w-0.5 h-7 bg-[#f86f5e] mx-3"></div>;
}

export default function NavBar() {
  const [selection, setSelection] = useState<NavBarSelection>("home");

  function NavBarLink(props: { name: string; item: NavBarSelection }) {
    const { name, item } = props;
    return (
      <a onClick={() => setSelection(item)} href={`#${item}`}>
        <p
          className={`${
            selection === item ? "text-[#f86f5e]" : "text-white"
          } font-semibold text-md xl:text-lg hover:cursor-pointer hover:text-[#f86f5e] transition-colors duration-300`}
        >
          {name}
        </p>
      </a>
    );
  }

  return (
    <nav className="w-full bg-black flex flex-col items-center">
      <div className="w-full p-3 md:p-10 flex flex-row justify-between relative max-w-[2200px]">
        <div className="h-16 flex items-center justify-center">
          <Image
            src="/logos/NEAT-color.png"
            alt="NEAT_logo"
            width={200}
            height={200}
            className="h-16 w-16 md:h-26 md:w-26"
          />
        </div>
        <div className="hidden md:flex gap-1 items-center text-white font-roboto">
          <NavBarLink name="Home" item="home" />
          <NavBarDivider />
          <NavBarLink name="About Us" item="about" />
          <NavBarDivider />
          <NavBarLink name="Gallery" item="gallery" />
          <NavBarDivider />
          <NavBarLink name="Reviews" item="reviews" />
          <NavBarDivider />
          <NavBarLink name="Contact" item="contact" />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Image
            src="/icons/facebook.svg"
            alt="facebook_logo"
            width={20}
            className="hover:cursor-pointer h-6 w-6 md:h-8 md:w-8"
            height={20}
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/1FGHvcZNoD/?mibextid=wwXIfr",
                "_blank"
              )
            }
          />
          <Image
            src="/icons/instagram.svg"
            alt="insta_logo"
            width={17}
            className="hover:cursor-pointer h-5 w-5 md:h-7 md:w-7"
            height={17}
            onClick={() =>
              window.open(
                "https://www.instagram.com/neatservices_inc?igsh=enh3anI2eHgyYm45&utm_source=qr",
                "_blank"
              )
            }
          />
          <Image
            src="/icons/tiktok.svg"
            alt="tiktok_logo"
            width={17}
            className="hover:cursor-pointer h-5 w-5 md:h-7 md:w-7"
            height={17}
            onClick={() => window.open("", "_blank")}
          />
        </div>
      </div>
      <div className={`w-full bg-[#f86f5e] ${styles.listwrapper}`}>
        <ul
          className={`text-black ${styles.listcontainer} text-xs md:text-lg py-1 md:px-30`}
          aria-hidden="true"
        >
          <li className="flex flex-col  text-center">
            <p className="font-semibold">New York License</p>
            <p className="font-black">#2103646</p>
          </li>
          <li className="flex flex-col  text-center">
            <p className="font-semibold">Yonkers, NY License</p>
            <p className="font-black">#7958</p>
          </li>
          <li className="flex flex-col  text-center">
            <p className="font-semibold">Westchester License</p>
            <p className="font-black">#WC-35367-H22</p>
          </li>
          <li className="flex flex-col  text-center">
            <p className="font-semibold">Suffolk License</p>
            <p className="font-black">#HI-67616</p>
          </li>
        </ul>
        <ul
          className={`text-black ${styles.listcontainer}  text-xs md:text-lg py-1 md:px-30`}
        >
          <li className="flex flex-col  text-center">
            <p className="font-semibold">New York License</p>
            <p className="font-black">#2103646</p>
          </li>
          <li className="flex flex-col  text-center">
            <p className="font-semibold">Yonkers, NY License</p>
            <p className="font-black">#7958</p>
          </li>
          <li className="flex flex-col  text-center">
            <p className="font-semibold">Westchester License</p>
            <p className="font-black">#WC-35367-H22</p>
          </li>
          <li className="flex flex-col  text-center">
            <p className="font-semibold">Suffolk License</p>
            <p className="font-black">#HI-67616</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
