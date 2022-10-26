import { useTheme } from "styled-components";

import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Typography from "../../components/Typography/Typography";
import MonkeyAstronautImage from "../../assets/images/MonkeyAstronautImage.png";

import { LoginImg } from "./Login.styles";

const BG_IMGS = [
  MonkeyAstronautImage,
  MonkeyAstronautImage,
  MonkeyAstronautImage,
  MonkeyAstronautImage,
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

      <Grid
        align="center"
        justify="center"
        style={{ overflow: "hidden", maxWidth: "50vw" }}
      >
        <LoginImg
          alt={`Hey NFT art`}
          src={BG_IMGS[0]}
          style={{
            borderRadius: 40,
            width: "100%",
          }}
        />

        {/* {BG_IMGS.map((img, index) => (
          <img
            key={index}
            alt={`Hey NFT art - ${index}`}
            src={img}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        ))} */}
      </Grid>
    </Grid>
  );
}
