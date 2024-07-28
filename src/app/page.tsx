import Image from "next/image";
import Bg1538 from '@/assets/bg-1538.svg'

export default function Home() {
  return (
    <main>
      <Image
        src={Bg1538}
        width={1920}
        height={1024}
        alt="Bg"
        className="bg-1538"
      />
    </main>
  );
}
