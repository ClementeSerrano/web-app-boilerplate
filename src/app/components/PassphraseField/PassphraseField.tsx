import { WithStyle } from '../components.types';
import {
  PassphraseFieldContainer,
  PassphraseText,
} from './PassphraseField.styles';

export default function PassphraseField({
  passphrase,
  style,
  className,
}: WithStyle & {
  passphrase: string;
}) {
  const prettifiedPassphrase = passphrase.replace(/\s+/g, '  ');

  return (
    <PassphraseFieldContainer style={style} className={className}>
      <PassphraseText>{prettifiedPassphrase}</PassphraseText>
    </PassphraseFieldContainer>
  );
}
