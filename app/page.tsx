import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div 
        style={{
          width: '100%', 
          height: '600px', 
          position: 'relative', 
          overflow: "hidden"
        }}
      >
        <Image
          src="/TempeSkyline.jpg"
          layout="fill"
          objectFit="cover"
          alt="Tempe Picture"
        />
      </div>
    </main>
  );
}
