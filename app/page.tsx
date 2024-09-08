import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { AppleCardsCarouselDemo } from "@/components/Card";
import UpcomingProjects from "@/components/UpcomingProjects";

export default function Home() {
  return (
    <main className="relative bg-black-100 
    flex justify-center items-center flex-col 
    mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}        
        />
        <Hero />
        <Grid/>
        <RecentProjects/>
        <UpcomingProjects/>
        {/* <AppleCardsCarouselDemo/> */}
        <Experience/>
        <Clients/>
        <Footer/>
      </div>
    </main>
  );
}
 