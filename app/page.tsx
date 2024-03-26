import {
  Contact,
  Hero,
  Navbar,
  Parallax,
  Portfolio,
  Services,
} from "@/components/index";
import { parallax } from "@/constants/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Parallax planetImg="bg-planet1" title={parallax[0]} />
        <Services />
        <Parallax planetImg="bg-planet2" title={parallax[1]} />
        <Portfolio />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
