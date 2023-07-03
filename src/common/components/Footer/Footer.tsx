import { useRef } from 'react';
import Typography from '../Typography/Typography';
import { useDevice } from '../../contexts/DeviceContext/DeviceContext.hooks';
import { useLayout } from '../../contexts/LayoutContext/LayoutContext.hooks';
import useElementSize from '../../hooks/useElementSize';
import GithubIcon from '../../assets/icons/GithubIcon';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';
import YoutubeIcon from '../../assets/icons/YoutubeIcon';
import {
  FooterContainer,
  FooterInnerContainer,
  FooterLinksContainer,
  FooterCopyrightContainer,
  FooterSocialMediaLink,
  FooterSectionsContainer,
  FooterLink,
} from './Footer.styles';

/**
 * Renders information about copyright data, sections links and social media links
 * of the project.
 */
export default function Footer() {
  const containerRef = useRef(null);

  const { isPhone } = useDevice();
  const { setFooterHeight } = useLayout();

  const copyrightDate = new Date();
  const copyrightYear = copyrightDate.getFullYear();

  useElementSize(containerRef, {
    onUpdate(size) {
      setFooterHeight(size.height);
    },
  });

  return (
    <FooterContainer ref={containerRef}>
      <FooterInnerContainer>
        <FooterCopyrightContainer>
          <Typography
            as="p"
            variant="paragraph1"
            style={{ margin: '0', textAlign: isPhone ? 'center' : 'left' }}
          >
            © {copyrightYear} Relo {isPhone && '- Designed Worldwide.'}
          </Typography>
        </FooterCopyrightContainer>

        {!isPhone && (
          <FooterLinksContainer>
            <FooterLink to="about">About</FooterLink>
            <FooterLink to="changelog">Changelog</FooterLink>
            <FooterLink to="contact">Contact</FooterLink>
          </FooterLinksContainer>
        )}

        <FooterSectionsContainer>
          <FooterSocialMediaLink
            target="_blank"
            href="https://www.instagram.com/relo.community/"
          >
            <InstagramIcon height={24} format="fill" />
          </FooterSocialMediaLink>

          <FooterSocialMediaLink
            target="_blank"
            href="https://twitter.com/theartisan_ofc"
          >
            <TwitterIcon height={24} format="fill" />
          </FooterSocialMediaLink>

          <FooterSocialMediaLink
            target="_blank"
            href="https://www.youtube.com/channel/UCfPzqsJmvKVLlOBNc62pQHw"
          >
            <YoutubeIcon height={24} format="fill" />
          </FooterSocialMediaLink>

          <FooterSocialMediaLink
            target="_blank"
            href="https://github.com/relo-network"
          >
            <GithubIcon height={24} format="fill" />
          </FooterSocialMediaLink>
        </FooterSectionsContainer>
      </FooterInnerContainer>
    </FooterContainer>
  );
}
