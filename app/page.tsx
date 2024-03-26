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
            className="text-center text-[75px] lg:text-[90px] mx-15"
            style={{
              position: 'relative',
              top: '200px', // Adjust as needed
              color: 'white',
              fontFamily: 'Cambria', // Professional font family
              fontWeight: 'bold',
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }}
          >
            Theta Tau
          </div>

          {/* Tagline */}
          <div
            className="text-center mx-15"
            style={{
              position: 'relative',
              top: '185px', // Relative to viewport height (adjust as needed)
              color: 'white',
              fontFamily: 'Cambria', // Professional font family
              fontSize: '32px', // Relative to viewport width (adjust as needed)
            }}
          >
            Professional Co-ed Engineering Fraternity at Arizona State University
          </div>
      </div>
    </main>
  );
}
