import { WithStyle } from '../components.types';
import {
  PassphraseCardContainer,
  PassphraseText,
} from './PassphraseCard.styles';

export default function PassphraseCard({
  passphrase,
  style,
  className,
}: WithStyle & {
  passphrase: string;
}) {
  const prettifiedPassphrase = passphrase.replace(/\s+/g, '  ');

  return (
    <PassphraseCardContainer
      container
      size="sm"
      justify="center"
      align="center"
      style={style}
      className={className}
    >
      <PassphraseText>{prettifiedPassphrase}</PassphraseText>
    </PassphraseCardContainer>
  );
}
