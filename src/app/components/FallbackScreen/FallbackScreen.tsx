import LoadingAnimation from "../../animations/LoadingAnimation/LoadingAnimation";
import ErrorIllustration from "../../illustrations/ErrorIllustration";

import { FallbackScreenProps } from "./FallbackScreen.types";
import {
  FallbackScreenContainer,
  FallbackScreenInnerContainer,
  FallbackScreenTitle,
  FallbackScreenParagraph,
} from "./FallbackScreen.styles";

export default function FallbackScreen({
  type,
  color,
  title,
  description,
}: FallbackScreenProps) {
  return (
    <FallbackScreenContainer>
      <FallbackScreenInnerContainer>
        {type === "loading" ? (
          <LoadingAnimation color={color} />
        ) : type === "error" ? (
          <ErrorIllustration color={color} />
        ) : null}

        {title &&
          (typeof title === "string" ? (
            <FallbackScreenTitle>{title}</FallbackScreenTitle>
          ) : (
            title
          ))}

        {description &&
          (typeof description === "string" ? (
            <FallbackScreenParagraph>{description}</FallbackScreenParagraph>
          ) : (
            description
          ))}
      </FallbackScreenInnerContainer>
    </FallbackScreenContainer>
  );
}
