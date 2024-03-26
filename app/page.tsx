import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div 
        style={{
          position: 'relative', 
          width: '100%', 
          height: '600px',
        }}
      >
        {/* Image */}
        <Image
          src="/TempeSkyline.jpg" // Image source path
          layout="fill" // Fill the container
          objectFit="cover" // Cover the container while maintaining aspect ratio
          alt="Tempe Picture" // Alt text for accessibility
          style={{ filter: 'brightness(38%)' }} // Lower opacity to 70%
        />
          {/* Text overlay */}
          <div
            className="text-[70px] lg:text-[85px]"
            style={{
              position: 'relative',
              top: '200px', // Adjust as needed
              left: '5vw',
              color: 'white',
              fontFamily: 'Cambria', // Professional font family
              fontWeight: 'bolder',
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }}
          >
            Theta Tau
          </div>

          {/* Tagline */}
          <div
            className="text-[30px] lg:text[32px]"
            style={{
              position: 'relative',
              top: '185px', // Relative to viewport height (adjust as needed)
              left: '5vw',
              color: 'white',
              fontFamily: 'Cambria', // Professional font family
            }}
          >
            Professional Co-ed Engineering Fraternity at Arizona State University
          </div>
      </div>
    </main>
  );
}
