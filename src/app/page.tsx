import Comparision from "@/components/Comparision";
import AboutPage from "./about/page";
import HeroPage from "./hero/page";
import OccassionPage from "./occassion/page";


export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden bg-muted">
      <HeroPage/>
      <AboutPage/>
      <OccassionPage/>
      <Comparision/>
    </div>
  );
}
