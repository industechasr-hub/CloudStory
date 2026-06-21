import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectCoverflow, } from "swiper/modules";

import "./bookslider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import BookCard from "../BookCard";

function BookSlider({ books }) {

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                 loop={books.length > 5}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 25,
                    stretch: 0,
                    depth: 120,
                    modifier: 1,
                    slideShadows: true,
                    scale: 0.9,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}
                navigation
                modules={[
                    EffectCoverflow,
                    Pagination,
                    Navigation,
                    Autoplay,
                ]}
                className="mySwiper"
            >
                {books.map((book) => (
                    <SwiperSlide
                        key={book._id}
                        className="!w-[300px]"
                    >
                        <BookCard book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </>

    )
}

export default BookSlider