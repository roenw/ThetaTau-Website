import Image from "next/image";

export default function Pillars() {
  return (
    <>
      <div className="relative w-screen h-[80vh]">
        <Image
          src="/Pillars.jpg"
          alt="pillars image"
          layout="fill"
          className="object-cover"
          style={{ filter: "brightness(75%)", zIndex: -1 }}
        />
        <div className="text-white flex flex-col items-start justify-end gap-5 w-[100%] h-[100%] p-20 font-sans">
          <h1 className="text-white text-9xl font-bold">Pillars</h1>
          <p className="text-white text-3xl font-extralight">
            Core Principles of Theta Tau
          </p>
        </div>
      </div>

      <div className="w-screen h-[150vh]">
        <div className="flex flex-row w-[100%] h-[33.33%] p-10 gap-10">
          <div className="w-[40%] h-[100%] relative ">
            <Image
              src="/BoringProfessionalPic.jpg"
              alt="professional-pic"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[60%] h-[100%] flex flex-col items-start justify-center gap-5 font-sans">
            <h1 className="text-[#b91c1b] text-5xl font-bold">
              Professionalism
            </h1>
            <p className="text-[#374151] text-justify text-xl">
              In Theta Tau we are dedicated to growing our members both in and
              outside the classroom, and jump starting our members’ careers.
              We seek to develop our members into leaders in engineering and our
              community, and building personal and professional networks which
              will last a lifetime.
            </p>
          </div>
        </div>

        <div className="flex flex-row w-[100%] h-[33.33%] bg-gray-100 p-10 gap-10">
          <div className="w-[60%] h-[100%] flex flex-col items-start justify-center gap-5 font-sans">
            <h1 className="text-[#b91c1b] text-5xl font-bold">Brotherhood</h1>
            <p className="text-[#374151] text-justify text-xl">
              Joining Theta Tau is like joining a family of over 40,000 honest, talented, and
              dependable men and women who all have an engineering mindset. You will form bonds
              and friendships which will last your entire life. You have friends you have never
              met in any city you move to. Your brothers will be there when times are hard, and
              your brothers will be there at your wedding. Your brothers will always be there, because
              your brothers in Theta Tau are your family.
            </p>
          </div>
          <div className="w-[40%] h-[100%] bg-red-100 relative">
            <Image
              src="/Brotherhood.jpg"
              alt="brotherhood-pic"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-row w-[100%] h-[33.33%] p-10 gap-10">
          <div className="w-[40%] h-[100%] bg-red-100 relative">
            <Image
              src="/HomePagePicture.jpg"
              alt="service-pic"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[60%] h-[100%] flex flex-col items-start justify-center gap-5 font-sans">
            <h1 className="text-[#b91c1b] text-5xl font-bold">Service</h1>
            <p className="text-[#374151] text-justify text-xl">
              Our members love giving back to the community. Every year
              there are national efforts where brothers from across the nation
              unite to help our communities. These efforts include activities like
              Habitat for Humanity and participating in clothing and food drives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
