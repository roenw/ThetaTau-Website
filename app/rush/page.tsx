import Image from "next/image";
import React from 'react';


export default function Rush() {
  return (
<>
      <div className="flex flex-col">
        <div className="text-white flex flex-col items-start justify-end gap-5 w-[100%] h-[100%] mt-50 py-20 font-sans bg-[#e0e0e0]">
          <h1 className="text-[#7a0104] lg:text-[6vw] mt-[5%] ml-[5%] font-bold">
            Recruitment
          </h1>
          <a href="/about" className="tt-button-primary hover:bg-tt-dark-red hover:text-tt-gold mr-5 ml-[5%]">
              Join Here
          </a>
        </div>
        <div className="w-screen">
              <h1 className="text-[#7a0104] text-[30px] lg:text-3xl font-bold mt-10 pl-10">
                Why should you join?
              </h1>
              <p className="text-[#171717] text-justify text-[15px] lg:text-xl p-10">
              Whether you want to build connections, develop professional skills, or just come for the free pizza, 
              there are plenty of reasons to rush Theta Tau. For many engineering students here at ASU, Theta Tau 
              is the defining part of their college experience. As the oldest and largest coed engineering fraternity 
              in the nation, joining Theta Tau can open up a whole world of possibilities to the aspiring engineer.
              </p>
        </div>

      <div className="w-screen bg-[#e0e0e0]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h1 className="text-[#7a0104] text-[30px] lg:text-3xl font-bold mt-10 pl-10">
              Rush Events
            </h1>
            <p className="text-[#171717] text-justify text-[15px] lg:text-xl p-10">
            Game Night - Wednesday August 28, 7:30PM - GWC487<br /><br />
            Donuts and Dog Toys - Thursday August 29, 7:30PM - GWC487 <br /><br />
            Feild Day - Friday August 30, 6:30PM - GWC487 <br /><br />
            Engineering Challenge - Thursday September 5, 7:30PM - GWC487 <br /><br />
            Meet the House - Friday September 6, 6:30PM - GWC487 <br /><br />
            </p>
          </div>
          
          <div className="force-align-center m-[5%]">
              <Image
                alt=""
                src="/PizzaPic.jpg"
                width="449"
                height="334"
              />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


