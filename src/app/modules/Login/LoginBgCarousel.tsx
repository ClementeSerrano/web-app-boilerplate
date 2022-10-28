import Carousel from "../../components/Carousel/Carousel";
import MonkeyAstronautImage from "../../assets/images/MonkeyAstronautImage.png";
import FlowerHeadManImage from "../../assets/images/FlowerHeadManImage.png";
import PythagorasWithGlassesImage from "../../assets/images/PythagorasWithGlassesImage.png";
import DistortionStoneHeadImage from "../../assets/images/DistortionStoneHeadImage.png";

import {
  loginBgImgsCarouselStyle,
  loginBgImgsSlideStyle,
} from "./Login.styles";

const BG_IMGS = [
  DistortionStoneHeadImage,
  FlowerHeadManImage,
  MonkeyAstronautImage,
  PythagorasWithGlassesImage,
];

export default function LoginBgCarousel() {
  return (
    <Carousel autoplay={4 * 1000} style={loginBgImgsCarouselStyle}>
      {BG_IMGS.map((img, index) => (
        <Carousel.Slide
          as="img"
          key={index}
          // TODO: Allow Carousel.Slide to receive custom props based on "as".
          // @ts-ignore
          src={img}
          alt={`Hey NFT art - ${index}`}
          style={loginBgImgsSlideStyle}
        />
      ))}
    </Carousel>
  );
}
