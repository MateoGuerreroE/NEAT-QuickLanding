import MainForm from "@/app/components/MainForm";
import React from "react";

export default function Initial() {
  return (
    <section className="h-[500px] bg-black/10 relative flex items-center justify-center">
      <div className="absolute z-10 bg-black/50 w-full h-full top-0"></div>
      <video
        className="h-full w-full z-0 object-cover bg-black"
        autoPlay
        muted
        loop
        playsInline
        src="https://mg-general-1.s3.us-east-2.amazonaws.com/SSYouTube.online_Restoring+a+300+years+Old+landmark!_1080p.mp4.mp4"
      />
      <div className="absolute max-w-[1000px] top-0 z-20 p-3 py-5 w-full h-full flex flex-col md:flex-row gap-3 md:py-5 md:justify-evenly md:items-center">
        <div className="flex flex-col rounded-2xl p-2 bg-black/50 text-white text-center md:text-left md:justify-evenly md:px-7 gap-2 md:max-h-[300px] md:max-w-[50%]">
          <h1 className="font-bold text-2xl font-roboto md:text-5xl">
            NEW YORK CITY CONTRACTORS
          </h1>
          <p className="font-roboto text-sm font-light md:text-lg">
            RENOVATE, RESTORE, FAST, RELIABLE, EASY
          </p>
        </div>
        <div className="bg-zinc-800 p-2 rounded-2xl h-full text-center font-roboto md:min-w-[300px] md:max-h-[80%]">
          <h2 className="text-[#f86f5e] font-semibold text-xl my-3">
            GET YOUR ESTIMATE NOW
          </h2>
          <div>
            <MainForm />
          </div>
        </div>
      </div>
    </section>
  );
}
