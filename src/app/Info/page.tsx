import Image from "next/image";
import Link from "next/link";
import Hello from "../components/hello";
import Wrapper from "../components/Wrapper";
import Counter from "../components/Counter";

export default function Info() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <Wrapper>
              <Hello color="white" isSpecial/>
            </Wrapper>
            <Image
            src="/images.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
            <Link href={"/"}>Main으로</Link>
            <br/>
            <Counter/>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
