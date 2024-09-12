"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax-bg") as HTMLElement;
      if (parallax) {
        const offset = window.scrollY;
        parallax.style.backgroundPositionY = `calc(50% + ${-offset * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative w-screen h-[100vh] bg-pillars-parallax bg-fixed bg-no-repeat bg-cover bg-center z-0 parallax-bg">
        <div className="text-white flex flex-col items-center justify-end gap-3 w-[100%] h-[100%] py-[12vw] lg:py-[2vw] font-sans backdrop-brightness-75">
          <h1 className="text-white text-9xl font-bold">About</h1>
          <p className="text-white text-3xl font-extralight">
            Learn more about the Delta Gamma Chapter
          </p>
        </div>
      </div>
      <div className="w-[100%] bg-white flex flex-col px-5 py-10">
        <div className="w-[100%] flex flex-row">
          <div className="w-[40%] flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-[#7a0104]">Theta Tau Nationally</h1>
          <p className="w-[100%] text-justify">Whether you want to build connections, develop professional skills, or
          just come for the free pizza, there are plenty of reasons to rush
          Theta Tau. For many engineering students here at ASU, Theta Tau is the
          defining part of their college experience. As the oldest and largest
          coed engineering fraternity in the nation, joining Theta Tau can open
          up a whole world of possibilities to the aspiring engineer.</p>
          </div>
          <div className="w-[60%] flex flex-row justify-center gap-2">
          <Image
                    alt=""
                    src="/PizzaPic.jpg"
                    width="400"
                    height="500"
                  />
                  <Image
                    alt=""
                    src="/houstonHotChicken.jpg"
                    width="400"
                    height="500"
                  />
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <div className="max-w-5xl mx-auto bg-[#ffffff]">
        <h1 className="text-[#7a0104] text-[30px] text-center lg:text-3xl font-bold mt-10 pl-10">
          Theta Tau Nationally
        </h1>
        <p className="text-[#171717] text-justify text-[15px] lg:text-xl p-10">
          Whether you want to build connections, develop professional skills, or
          just come for the free pizza, there are plenty of reasons to rush
          Theta Tau. For many engineering students here at ASU, Theta Tau is the
          defining part of their college experience. As the oldest and largest
          coed engineering fraternity in the nation, joining Theta Tau can open
          up a whole world of possibilities to the aspiring engineer.
        </p>
        <h1 className="text-[#7a0104] text-[30px] lg:text-3xl font-bold mt-10 pl-10">
          National
        </h1>
        <p className="text-[#171717] text-justify text-[15px] lg:text-xl p-10">
          {" "}
          Theta Tau is a coed professional engineering fraternity. We are the
          oldest, largest, and foremost Fraternity for Engineers. Theta Tau was
          founded October 15th, 1904, has over 80 chapters, and over 40,000
          lifetime members across the nation.
        </p>
        <h1 className="text-[#7a0104] text-[30px] lg:text-3xl font-bold mt-10 pl-10">
          Purpose
        </h1>
        <p className="text-[#171717] text-justify text-[15px] lg:text-xl p-10">
          The purpose of Theta Tau is to develop and maintain a high standard of
          professional interest among its members and to unite them in a strong
          bond of fraternal fellowship.
        </p>
        <h1 className="text-[#7a0104] text-[30px] lg:text-3xl font-bold mt-10 pl-10">
          Guiding Principles
        </h1>
        <p className="text-[#171717] text-justify text-[15px] lg:text-xl p-10">
          <li>
            Culture of brotherhood, lifelong relationships, and connection
          </li>
          <li>Mutual respect and professionalism</li>
          <li>Balance of social, service, and professional activities</li>
          <li>Diversity of engineering disciplines and demographics</li>
        </p>
        <h1 className="text-[#7a0104] text-[30px] lg:text-3xl font-bold mt-10 pl-10">
          Open Motto
        </h1>
        <p className="text-[#171717] text-justify text-[15px] lg:text-xl p-10">
          “Whatsoever thy hand findeth to do, do it with thy might;…”
          –Ecclesiastes 9:10
        </p>

        <h1 className="text-[#7a0104] text-[30px] text-center lg:text-3xl font-bold mt-10 pl-10">
          Theta Tau at ASU: Delta Gamma Chapter
        </h1>
        <p>
          <h1 className="text-[#7a0104] text-[30px] lg:text-3xl font-bold mt-10 pl-10">
            Chapter
          </h1>

          <p className="text-[#171717] text-justify text-[15px] lg:text-xl p-10">
            The Delta Gamma chapter was founded May 6th, 1995 at Arizona State
            University (ASU). We have approximately 40 student members, and over
            400 total members.
          </p>
        </p>
      </div> */}
    </>
  );
}

