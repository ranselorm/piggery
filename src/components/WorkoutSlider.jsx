import { workouts } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../workoutSlider.css";
import { Navigation } from "swiper";

const WorkoutSlider = () => {
  const { programs } = workouts;

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={28}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="workoutSlider"
    >
      {programs.map((program, index) => {
        return (
          <SwiperSlide
            key={index}
            className="max-w-[320px] max-h-[320px]"
          >
            <img
              src={program.image}
              alt="program"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
