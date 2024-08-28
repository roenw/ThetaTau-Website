import Image from "next/image";

export default function Rush() {
  return (
<>
      <div className="flex flex-col">
        <div className="text-white flex flex-col items-start justify-end gap-5 w-[100%] h-[100%] mt-50 py-20 font-sans backdrop-brightness-75">
          <h1 className="text-[#7a0104] lg:text-[5vw] mt-[5%] ml-[5%] font-bold">
            Recruitment
          </h1>
          <p className="text-white lg:text-[2vw] ml-[5%] font-extralight">
            Become a brother
          </p>
        </div>

      <div className="w-screen">
            <h1 className="text-[#7a0104] text-[30px] lg:text-3xl font-bold mt-10 pl-10">
              Why should you join?
            </h1>
            <p className="text-[#171717] text-justify md:text-[18px] lg:text-xl p-10">
            Whether you want to build connections, develop professional skills, or just come for the free pizza, 
            there are plenty of reasons to rush Theta Tau. For many engineering students here at ASU, Theta Tau 
            is the defining part of their college experience. As the oldest and largest coed engineering fraternity 
            in the nation, joining Theta Tau can open up a whole world of possibilities to the aspiring engineer.
            </p>
      </div>
    </div>
    </>
  );
}
