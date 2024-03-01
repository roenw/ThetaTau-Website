import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div style={{width: '100%', height: '100%', position: 'relative'}}>
        <Image
          // className="object-fill"
          src="/TempeSkyline.jpg"
          layout='fill'
          objectFit='contain'
          alt="Tempe Picture"
        />
      </div>
    </main>
  );
}
