import Image from "next/image";
import Bg1538 from "@/assets/bg-1538.svg";
import Bg1280 from "@/assets/bg-1280.svg";
import Bg1024 from "@/assets/bg-1024.svg";
import Bg768 from "@/assets/bg-768.svg";
import Bg280 from "@/assets/bg-280.svg";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const allBgSize = [
  {
    src: Bg1538,
    width: 1920,
    height: 1024,
    class: "bg-1538",
  },
  {
    src: Bg1280,
    width: 1440,
    height: 960,
    class: "bg-1280",
  },
  {
    src: Bg1024,
    width: 1280,
    height: 832,
    class: "bg-1024",
  },
  {
    src: Bg768,
    width: 834,
    height: 1194,
    class: "bg-768",
  },
  {
    src: Bg280,
    width: 430,
    height: 932,
    class: "bg-280",
  },
];

export default function Home() {
  return (
    <main>
      {allBgSize.map((allBgSize, index) => (
        <Image
          key={index}
          src={allBgSize.src}
          width={allBgSize.width}
          height={allBgSize.height}
          alt="Bg"
          className={allBgSize.class}
        />
      ))}

      <div className="Contents">
        <Navbar />
        <Hero/>
      </div>
    </main>
  );
}
