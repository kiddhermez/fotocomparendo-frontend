import Search from "@/components/search";
import NavBar from "../components/navBar";
import { UpWave, CarIcon } from "@/components/icons";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden bg-white">
      <div className="relative flex h-screen w-screen bg-background">
        <article className="relative z-10 flex w-1/2 justify-center">
          <Search />
        </article>
        <CarIcon className="ml-auto w-1/2 justify-center fill-slate-950/20" />
      </div>
      <UpWave className="absolute bottom-0 z-[1] w-screen fill-slate-300" />
    </main>
  );
}
