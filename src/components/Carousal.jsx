import { CARD_IMG_URL } from "../contants";

export const Carousal0 = (props) => {
  const { restData } = props;
  return (
    <div className="slider__item">
      <img
        className="slider__image"
        src={CARD_IMG_URL + restData.androidAppImage}
        alt={restData.accessibility.altText}
      />
    </div>
  );
};

//Used in MidCarousal
export const Carousal1 = (props) => {
  const { restData } = props;
  return (
    <div className="slider__item2">
      <img
        className="slider__image2"
        src={CARD_IMG_URL + restData.imageId}
        alt={restData.accessibility.altText}
      />
    </div>
  );
};
