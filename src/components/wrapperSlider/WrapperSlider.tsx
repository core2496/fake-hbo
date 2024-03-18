"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SliderStyles from "./wrapper-slider.module.css";
import { useCallback } from "react";
import Banner from "./Banner";
import Card from "./Card";

interface Props {
  data: WrapperSliderContent;
}

export const WrapperSlider = ({ data }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: data.type === "CARD" ? true : false, slidesToScroll: data.type === "CARD" ? 2 : 1, watchResize: false },
    [Autoplay({ delay: 10000 })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={SliderStyles.embla} ref={emblaRef}>
      <div className={SliderStyles.embla__container}>
        {data.type === "BANNER"
          ? data.contentBannerList?.map((item) => <Banner key={item.id} data={item}></Banner>)
          : data.contentCardList?.map((item) => <Card key={item.id} data={item}></Card>)}
      </div>
      <button className={SliderStyles.embla__prev} onClick={scrollPrev}>
        <img src="icons/prev.png" className={SliderStyles.embla__prev__icon} alt="" />
      </button>
      <button className={SliderStyles.embla__next} onClick={scrollNext}>
        <img src="icons/prev.png" className={SliderStyles.embla__next__icon} alt="" />
      </button>
    </div>
  );
};
