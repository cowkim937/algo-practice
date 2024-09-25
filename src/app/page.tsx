import Link from 'next/link';
import Hello from './components/hello';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-7xl font-serif font-bold text-sky-700">Hello, World!</p>
        <p className="text-2xl text-justify text-center">DDDDDD<br/>AAAAAA</p>

        <Hello name="World!"/>

        <Link href={"/Info"}>About</Link>
      </main>
    </div>
  );
}
