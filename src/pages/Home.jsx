import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Workouts from "../components/Workouts";
import Faq from "../components/Faq";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Workouts />
      <Faq />
    </div>
  );
};

export default Home;
