import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div 
        style={{
          position: 'relative', 
          width: '100%', 
          height: '800px',
        }}
      >
        {/* TempeSkylineImage */}
        <Image
          src="/SparkyPic.jpg" // Image source path
          layout="fill" // Fill the container
          objectFit="cover" // Cover the container while maintaining aspect ratio
          alt="Tempe Picture" // Alt text for accessibility
          style={{ filter: 'brightness(60%)' }} // Lower opacity to 70%
        />
        {/* Theta Tau Text */}
        <div
          style={{
            position: 'absolute',
            top: '300px', // Adjust as needed
            left: '8vw', // Adjust as needed
            color: 'white',
            fontSize: '75px', // Relative to viewport width (adjust as needed)
            fontFamily: 'Cambria', // Professional font family
            fontWeight: 'bold',
            backgroundColor: 'rgba(0, 0, 0, 0)',
          }}
        >
          Theta Tau
        </div>

        {/* Chapter Name and Location */}
        <div
          style={{
            position: 'absolute',
            top: '400px', // Relative to viewport height (adjust as needed)
            left: '8vw', // Relative to viewport width (adjust as needed)
            color: 'white',
            fontFamily: 'Cambria', // Professional font family
            fontSize: '24px', // Relative to viewport width (adjust as needed)
            backgroundColor: 'rgba(0, 0, 0, 0)',
          }}
        >
          Professional Co-ed Engineering Fraternity<br></br>
          Delta Gamma Chapter at Arizona State University
        </div>
      </div>
    </main>
  );
}
