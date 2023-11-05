import Search from "@/components/search";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <main className="relative h-full overflow-hidden bg-white">
      <NavBar />
      <div className="h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-background scrollbar-thumb-rounded-full">
        <Search />
        <div className="h-screen w-screen bg-white">hola</div>
      </div>
    </main>
  );
}
