import SliderStyles from "./wrapper-slider.module.css";

interface Props {
  data: CardSliderContent;
}

function Card({ data }: Props) {
  return (
    <div className={SliderStyles.cardSlideContent}>
      <img src={data.url} alt="" className={SliderStyles.cardImage} />
    </div>
  );
}
export default Card;
