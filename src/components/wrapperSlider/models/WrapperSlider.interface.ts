interface CardSliderContent {
  id:number,
  url:string,
}
interface BannerSliderContent extends CardSliderContent {
  text:string,
  age:string,
  year:number
}

interface WrapperSliderContent {
  contentBannerList?: BannerSliderContent[],
  contentCardList?: CardSliderContent[],
  type: "CARD" | "BANNER";
}