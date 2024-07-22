import Image from "next/image";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bungee",
  weight: "400"
});

export default function Home() {
  return (
    <main>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "900px",
        }}
      >
        {/* Home Page Picture */}
        <Image
          src="/TauGamma-Gradient.jpg" // Image source path
          layout="fill" // Fill the container
          objectFit="cover" // Cover the container while maintaining aspect ratio
          alt="Tempe Picture" // Alt text for accessibility
          style={{ filter: "brightness(60%)", zIndex: -1 }} // Lower opacity to 70%
        />
        {/* Theta Tau Text */}
        <div
          style={{
            position: "absolute",
            top: "300px", // Adjust as needed
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            fontSize: "75px", // Relative to viewport width (adjust as needed)
            lineHeight: "80%"
          }}
        >
          <h1 className={`${bungee.className} antialiased text-tt-dark-red font-weight-bold`}>
            Forging Future Engineers
          </h1>
          <p className="pt-10 text-white leading-tight">
            Nation's Foremost Professional Engineering Fraternity
          </p>
        </div>

        {/* Chapter Name and Location */}
        <div
          className="lg:top-[500px]"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0)"
          }}
        >

        </div>
      </div>
    </main>
  );
}
