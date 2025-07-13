import MainForm from "@/app/components/MainForm";
import React from "react";

export default function Initial() {
  return (
    <section className="h-[520px] md:h-[550px] 2xl:h-[700px] bg-black/10 relative flex items-center justify-center">
      <div className="absolute z-10 bg-black/50 w-full h-full top-0"></div>
      <video
        className="h-full w-full z-0 object-cover bg-black"
        autoPlay
        muted
        loop
        playsInline
        src="https://mg-general-1.s3.us-east-2.amazonaws.com/SSYouTube.online_Restoring+a+300+years+Old+landmark!_1080p.mp4.mp4"
      />
      <div className="absolute max-w-[1000px] 2xl:max-w-[1400px] top-0 z-20 p-3 py-5 w-full h-full flex flex-col md:flex-row gap-3 md:py-5 md:justify-evenly md:items-center">
        <div className="flex flex-col rounded-2xl p-2 lg:p-5 bg-black/50 text-white text-center md:text-left md:justify-evenly md:px-7 gap-2 2xl:gap-5 md:max-h-[300px] 2xl:max-h-[400px] md:max-w-[50%] 2xl:max-w-[40%]">
          <h1 className="font-bold text-2xl 2xl:text-6xl font-roboto md:text-5xl">
            NEW YORK CITY CONTRACTORS
          </h1>
          <p className="font-roboto text-sm font-light md:text-lg xl:text-xl">
            RENOVATE, RESTORE, FAST, RELIABLE, EASY
          </p>
        </div>
        <div className="bg-zinc-800 p-2 rounded-2xl text-center font-roboto">
          <h2 className="text-[#f86f5e] font-semibold text-xl md:text-2xl 2xl:text-3xl my-3">
            GET YOUR ESTIMATE NOW
          </h2>
          <div className="md:min-w-[350px] 2xl:min-w-[400px]">
            <MainForm />
          </div>
        </div>
      </div>
    </section>
  );
}
