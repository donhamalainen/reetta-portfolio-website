import Link from "next/link";
import Image from "next/image";
import DEMO from "@/public/images/demo2.jpg";
export default function Home() {
  return (
    <main className="px-5">
      <div className="h-full w-full md:h-[calc(100vh-40vh)] ">
        <Image
          src={DEMO}
          alt=""
          priority
          className="rounded-lg h-full w-full object-cover"
        />
      </div>
    </main>
  );
}