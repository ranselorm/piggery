import Banner from "../components/Banner";
import Services from "../components/Services";
import Info from "../components/Info";
import Workouts from "../components/Workouts";
import Faq from "../components/Faq";
import Countup from "../components/Countup";
import HeroSlider from "../components/HeroSlider";
const Home = () => {
  return (
    <div>
      <Banner />
      {/* <HeroSlider /> */}
      <Services />
      <Info />
      <Workouts />
      <Countup />
      <Faq />
    </div>
  );
};

export default Home;
