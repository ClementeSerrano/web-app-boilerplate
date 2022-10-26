import { useTheme } from "styled-components";

import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Typography from "../../components/Typography/Typography";
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
  FlowerHeadManImage,
  MonkeyAstronautImage,
  PythagorasWithGlassesImage,
  DistortionStoneHeadImage,
];

export default function Login() {
  const theme = useTheme();

  return (
    <Grid as="section" container direction="row" maxHeight>
      <Grid fluid justify="center">
        <Typography as="h1" variant="title3">
          Login to Hey
        </Typography>

        <Button onClick={() => theme.toggleMode()}>Login</Button>
      </Grid>

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
    </Grid>
  );
}
