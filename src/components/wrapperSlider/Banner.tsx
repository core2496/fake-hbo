import SliderStyles from "./wrapper-slider.module.css";

interface Props {
  data: BannerSliderContent;
}

function Banner({ data }: Props) {
  return (
    <div className={SliderStyles.bannerSlideContent}>
      <img src={data.url} alt="" className={SliderStyles.bannerImage} />
      <div className={SliderStyles.bannerInfo}>
        <small className={SliderStyles.bannerInfoSmall}>
          {data.age} {data.year}
        </small>
        <p>{data.text}</p>
        <button className={SliderStyles.bannerAction}>Ir a la película</button>
      </div>
    </div>
  );
}
export default Banner;
