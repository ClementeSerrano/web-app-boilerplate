import LoadingAnimation from '../../assets/animations/LoadingAnimation/LoadingAnimation';
import DoneCheckIllustration from '../../assets/illustrations/DoneCheckIllustration';
import ErrorIllustration from '../../assets/illustrations/ErrorIllustration';

import { FallbackComponentProps } from './FallbackComponent.interfaces';
import {
  FallbackComponentContainer,
  FallbackComponentInnerContainer,
  FallbackComponentTitle,
  FallbackComponentParagraph,
} from './FallbackComponent.styles';

export default function FallbackComponent({
  type,
  color,
  title,
  description,
}: FallbackComponentProps) {
  const renderIllustration = () => {
    switch (type) {
      case 'loading':
        return <LoadingAnimation color={color} />;
      case 'success':
        return <DoneCheckIllustration color={color} />;
      case 'error':
        return <ErrorIllustration color={color} />;
      default:
        return;
    }
  };

  return (
    <FallbackComponentContainer>
      <FallbackComponentInnerContainer>
        {renderIllustration()}

        {title &&
          (typeof title === 'string' ? (
            <FallbackComponentTitle variant="title6">
              {title}
            </FallbackComponentTitle>
          ) : (
            title
          ))}

        {description &&
          (typeof description === 'string' ? (
            <FallbackComponentParagraph variant="paragraph1">
              {description}
            </FallbackComponentParagraph>
          ) : (
            description
          ))}
      </FallbackComponentInnerContainer>
    </FallbackComponentContainer>
  );
}
