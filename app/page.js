import Hero from "./components/hero/Hero";
import Suponsor from "./components/suponsor";
import Aboutus from "./components/about-us/Aboutus";
import Video from "./components/video/Video";
import Services from "./components/services/Services";
import Industries from "./components/industries/Industries";
import HighLights from "./components/highlights/HighLights";
import Testimonal from "./components/testimonials/Testimonal";
import Header from "./components/header/Header";
import SidebarToggleBtn from "./components/menu/MenuToggle";
import MenuToggleBtn from "./components/menu/MenuToggle";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <MenuToggleBtn />
      <Menu />
      <main>
        <Hero />
        <Suponsor />
        <Aboutus />
        <Video />
        <Services />
        <Industries />
        <HighLights />
        <Testimonal />
      </main>
      <Footer />
    </>
  );
}
