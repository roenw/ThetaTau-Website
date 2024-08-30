"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Pillars() {
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

  const gallerySlides = [
    {
      slide: "/carousel/BobRossNight.jpg",
      info: "Bob Ross Night",
    },
    {
      slide: "/carousel/FinalsStudyRoom.jpg",
      info: "Study sessions for Finals",
    },
    {
      slide: "/carousel/GameNight.jpg",
      info: "Game Nights",
    },
    {
      slide: "/carousel/NobleNights.jpg",
      info: "Weekly Noble Nights",
    },
    {
      slide: "/carousel/ParkCleanup.jpg",
      info: "Local Park Cleanup",
    },
    {
      slide: "/carousel/Retreat.jpg",
      info: "Camping during Retreat",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? gallerySlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === gallerySlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="relative w-screen h-[100vh] bg-pillars-parallax bg-fixed bg-no-repeat bg-cover bg-center z-0 parallax-bg">
        <div className="text-white flex flex-col lg:items-center justify-end gap-3 w-[100%] h-[100%] py-[12vw] lg:py-[2vw] font-sans backdrop-brightness-75">
          <h1 className="text-white text-9xl font-bold">Pillars</h1>
          <p className="text-white text-3xl font-extralight">
            Theta Tau's Core Values
          </p>
        </div>
      </div>

      <div className="w-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] h-[88vh] lg:h-[70vh] bg-[#7a0104] py-5 gap-5">
          <div className="h-[100%] min-h-[60vw] lg:min-h-0 relative shadow-2xl">
            <Image
              src="/Professional-ChiLine.jpg"
              alt="professional-pic"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="h-[100%] flex flex-col items-start justify-center font-sans lg:border-l-4 border-[#e8b119]" id="professionalism">
            <h1 className="text-[#e8b119] text-4xl font-bold pl-10">
              Professionalism
            </h1>
            <p className="text-[#EEEEEE] text-justify text-md p-10">
              In Theta Tau we are dedicated to growing our members both in and
              outside the classroom, and jump starting our members’ careers. We
              seek to develop our members into leaders in engineering and our
              community, and building personal and professional networks which
              will last a lifetime.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] h-[91vh] bg-[#e8b119] py-10 gap-5">
          <div className="h-[100%] flex flex-col items-start justify-center font-sans lg:border-r-4 border-[#7a0104]" id="brotherhood">
            <h1 className="text-[#7a0104] text-4xl font-bold pl-10">
              Brotherhood
            </h1>
            <p className="text-[#171717] text-justify text-md p-10">
              Joining Theta Tau is like joining a family of over 40,000 honest,
              talented, and dependable men and women who all have an engineering
              mindset. You will form bonds and friendships which will last your
              entire life. You have friends you have never met in any city you
              move to. Your brothers will be there when times are hard, and your
              brothers will be there at your wedding. Your brothers will always
              be there, because your brothers in Theta Tau are your family.
            </p>
          </div>
          <div className="h-[100%] min-h-[60vw] lg:min-h-0 relative shadow-2xl">
            <Image
              src="/Brotherhood-Cookout.jpg"
              alt="brotherhood-pic"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] h-[88vh] bg-[#7a0104] py-10 gap-5">
          <div className="h-[100%] min-h-[60vw] lg:min-h-0 relative shadow-2xl">
            <Image
              src="/Service-BikeSaviors.jpg"
              alt="service-pic"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="h-[100%] flex flex-col items-start justify-center font-sans lg:border-l-4 border-[#e8b119]" id="service">
            <h1 className="text-[#e8b119] text-4xl font-bold pl-10">
              Service
            </h1>
            <p className="text-[#EEEEEE] text-justify text-md p-10">
              Our members love giving back to the community. Every year there
              are national efforts where brothers from across the nation unite
              to help our communities. These efforts include activities like
              Habitat for Humanity and participating in clothing and food
              drives.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="flex flex-col w-screen lg:px-20 lg:py-10 bg-[#e8b119] gap-10">
          <div className="flex flex-col w-[100%] h-[30vh] lg:h-[20vh] px-5 lg:px-0 gap-5">
            <h1 className="text-[#7a0104] text-8xl pt-5 lg:pt-0 font-normal">Gallery</h1>
            <p className="text-[#171717] text-xl pl-2 italic">
              Discover the vibrant life of Theta Tau through our gallery. From
              professional events and service projects to brotherhood gatherings,
              see the moments that define our fraternity.
            </p>
          </div>

          <div className="w-[100%] h-[70vh] relative flex justify-center items-center group pt-5 lg:pt-0">
            <div
              style={{
                backgroundImage: `url(${gallerySlides[currentIndex].slide})`,
              }}
              className="w-[100%] h-full bg-center bg-cover lg:rounded-xl duration-500"
            >
              <div className="flex flex-col items-center lg:items-start justify-end gap-5 w-[100%] h-[100%] p-10 duration-500 relative">
                <p className="text-center text-white text-5xl backdrop-blur-3xl bg-black/30 font-light border-4 border-[#e8b119] border-spacing-y-3 p-3 ">
                  {gallerySlides[currentIndex].info}
                </p>
              </div>
            </div>
            <div className="group-hover:block absolute top-[45%] -translate-x-0 translate-y-[45%] left-5 text-2xl rounded-full p-2 bg-transparent text-white cursor-pointer duration-200">
              <SlArrowLeft size={40} onClick={prevSlide} />
            </div>
            <div className="group-hover:block absolute top-[45%] -translate-x-0 translate-y-[45%] right-5 text-2xl rounded-full p-2 bg-transparent text-white cursor-pointer duration-200">
              <SlArrowRight size={40} onClick={nextSlide} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
