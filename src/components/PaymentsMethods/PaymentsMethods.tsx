"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import BackgroundRadialRight from "../BackgroundRadialRight/BackgroundRadialRight";
import { dataPaymentMethods } from "./PaymentsMethods-data";
import Image from "next/image";
import { CtaDark } from "../CtaDark";

function PaymentsMethods() {
    return (
        <div className="relative py-20 md:py-64 " id="servicios">
            <BackgroundRadialRight />
            <div className="relative w-full overflow-hidden max-w-screen-xl mx-auto">
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 8,
                            spaceBetween: 15,
                        },
                    }}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    loop={true}
                    speed={2000}
                >
                    <div className="absolute flex">
                    {dataPaymentMethods.map(({ id, image }) => (
                        <SwiperSlide key={id} className="flex items-center slider-horizontal">
                            <Image
                                src={`/assets/${image}`}
                                alt="Payment"
                                width={70}
                                height={70}
                                className="h-[60px] w-[120px] object-contain"
                            ></Image>
                        </SwiperSlide>
                    ))}
                    </div>
                </Swiper>
            </div>
            <CtaDark />
        </div>
    );
}

export default PaymentsMethods;
