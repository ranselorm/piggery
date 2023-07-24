import { workouts } from "../data";
import WorkoutSlider from "./WorkoutSlider";

const Workouts = () => {
  const { title } = workouts;
  return (
    <section className="section">
      <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0">
        <h2 className="text-4xl font-bold section-title">
          <div className="bg-primary-200 h-[2px] w-[100px]"></div>
        </h2>
      </div>
      <div className="px-6" data-aos="fade-up" data-aos-delay="100">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
