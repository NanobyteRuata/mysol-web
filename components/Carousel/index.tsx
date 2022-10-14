import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type SlideImage = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

interface CarouselProps {
  slideImages: SlideImage[];
}

const Carousel = ({ slideImages }: CarouselProps) => {
  return (
    <div>
      <Swiper
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideImages.map((slideImage, i) => (
          <SwiperSlide className="relative" key={i}>
            <img
              className="object-fill w-full lg:h-auto min-h-[300px] max-h-[85vh]"
              src={slideImage.imageUrl}
              alt={slideImage.title}
            />
            <div className="absolute bottom-0 bg-black bg-opacity-60 hover:bg-opacity-80 p-5 w-full flex flex-col items-center">
              <h1 className="text-3xl mb-5">{slideImage.title}</h1>
              <h3 className="mb-5">{slideImage.subtitle}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
