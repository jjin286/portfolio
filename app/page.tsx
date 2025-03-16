import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav"
import Grid from "@/components/Grid"
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Tech from "@/components/Tech";
import { navItems } from "@/data";

/**
 * Displays the Home page of the portfolio
 *
 * @returns {JSX.Element}
 *
 * Home -> {FloatingNav, Hero, Grid}
 */
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid/>
        <Projects />
        <Tech />
        <Footer />
      </div>
    </main>
  );
}
