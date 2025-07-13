"use client";
import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className="w-full">
      <div className="bg-black p-3 md:p-10 flex flex-row justify-between relative">
        <div className="h-12 flex items-center justify-center">
          <Image
            src="/logos/NEAT-color.png"
            alt="NEAT_logo"
            width={200}
            height={200}
            className="h-16 w-16 md:h-24 md:w-24"
          />
        </div>
        <div className="flex flex-row gap-3">
          <Image
            src="/icons/facebook.svg"
            alt="facebook_logo"
            width={20}
            className="hover:cursor-pointer"
            height={20}
            onClick={() => window.open("", "_blank")}
          />
          <Image
            src="/icons/instagram.svg"
            alt="insta_logo"
            width={17}
            className="hover:cursor-pointer"
            height={17}
            onClick={() => window.open("", "_blank")}
          />
          <Image
            src="/icons/tiktok.svg"
            alt="tiktok_logo"
            width={17}
            className="hover:cursor-pointer"
            height={17}
            onClick={() => window.open("", "_blank")}
          />
        </div>
      </div>
      <div className={`w-full bg-[#f86f5e] ${styles.listwrapper}`}>
        <ul
          className={`text-black ${styles.listcontainer} py-1 md:px-7`}
          aria-hidden="true"
        >
          <li className="flex flex-col text-xs text-center">
            <p className="font-semibold">New York License</p>
            <p className="font-black">#2103646</p>
          </li>
          <li className="flex flex-col text-xs text-center">
            <p className="font-semibold">Yonkers, NY License</p>
            <p className="font-black">#7958</p>
          </li>
          <li className="flex flex-col text-xs text-center">
            <p className="font-semibold">Westchester License</p>
            <p className="font-black">#WC-35367-H22</p>
          </li>
          <li className="flex flex-col text-xs text-center">
            <p className="font-semibold">Suffolk License</p>
            <p className="font-black">#HI-67616</p>
          </li>
        </ul>
        <ul className={`text-black ${styles.listcontainer}`}>
          <li className="flex flex-col text-xs text-center">
            <p className="font-semibold">New York License</p>
            <p className="font-black">#2103646</p>
          </li>
          <li className="flex flex-col text-xs text-center">
            <p className="font-semibold">Yonkers, NY License</p>
            <p className="font-black">#7958</p>
          </li>
          <li className="flex flex-col text-xs text-center">
            <p className="font-semibold">Westchester License</p>
            <p className="font-black">#WC-35367-H22</p>
          </li>
          <li className="flex flex-col text-xs text-center">
            <p className="font-semibold">Suffolk License</p>
            <p className="font-black">#HI-67616</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
