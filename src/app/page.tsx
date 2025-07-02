import Comparision from "@/components/Comparision";
import AboutPage from "./about/page";
import OccassionPage from "./occassion/page";
import TestimonialPage from "./testimonial/page";
import MySlider from "@/components/Slider";


export default function Home() {
  return (
    <div className="w-full h-auto overflow-hidden bg-muted">
      <AboutPage/>
      <OccassionPage/>
      <Comparision/>
      <TestimonialPage/>
      <MySlider/>
    </div>
  );
}
