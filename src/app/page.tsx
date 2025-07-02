import AboutPage from "./about/page";
import HeroPage from "./hero/page";


export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden bg-muted">
      <HeroPage/>
      <AboutPage/>
    </div>
  );
}
