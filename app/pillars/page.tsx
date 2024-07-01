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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              minus, voluptatum repudiandae tempore blanditiis ipsam, modi
              repellendus molestias laboriosam aspernatur facere delectus
              tenetur eum hic aliquam ut repellat, nam et necessitatibus.
              Dignissimos reprehenderit, voluptatum optio ratione vero veniam
              consectetur illo eligendi voluptate, quia illum, sed rerum unde
              est magnam atque.
            </p>
          </div>
        </div>

        <div className="flex flex-row w-[100%] h-[33.33%] bg-gray-100 p-10 gap-10">
          <div className="w-[60%] h-[100%] flex flex-col items-start justify-center gap-5 font-sans">
            <h1 className="text-[#b91c1b] text-5xl font-bold">Brotherhood</h1>
            <p className="text-[#374151] text-justify text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              minus, voluptatum repudiandae tempore blanditiis ipsam, modi
              repellendus molestias laboriosam aspernatur facere delectus
              tenetur eum hic aliquam ut repellat, nam et necessitatibus.
              Dignissimos reprehenderit, voluptatum optio ratione vero veniam
              consectetur illo eligendi voluptate, quia illum, sed rerum unde
              est magnam atque.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              minus, voluptatum repudiandae tempore blanditiis ipsam, modi
              repellendus molestias laboriosam aspernatur facere delectus
              tenetur eum hic aliquam ut repellat, nam et necessitatibus.
              Dignissimos reprehenderit, voluptatum optio ratione vero veniam
              consectetur illo eligendi voluptate, quia illum, sed rerum unde
              est magnam atque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
