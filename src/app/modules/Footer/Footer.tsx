import { useRef } from 'react';
import Typography from '../../components/Typography/Typography';
import { useDevice } from '../../contexts/DeviceContext/DeviceContext.hooks';
import { useLayout } from '../../contexts/LayoutContext/LayoutContext.hooks';
import useElementSize from '../../hooks/useElementSize';
import GithubIcon from '../../icons/GithubIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import YoutubeIcon from '../../icons/YoutubeIcon';
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
            © {copyrightYear} The Artisan {isPhone && '- Designed Worldwide.'}
          </Typography>
        </FooterCopyrightContainer>

        {!isPhone && (
          <FooterLinksContainer>
            <FooterLink to="about">About</FooterLink>
            <FooterLink to="artToken">ARTI Token</FooterLink>
            <FooterLink to="changelog">Changelog</FooterLink>
            <FooterLink to="contact">Contact</FooterLink>
          </FooterLinksContainer>
        )}

        <FooterSectionsContainer>
          <FooterSocialMediaLink
            target="_blank"
            href="https://www.instagram.com/grafito.app/"
          >
            <InstagramIcon height={24} format="fill" />
          </FooterSocialMediaLink>

          <FooterSocialMediaLink
            target="_blank"
            href="https://www.linkedin.com/company/71194720"
          >
            <TwitterIcon height={24} format="fill" />
          </FooterSocialMediaLink>

          <FooterSocialMediaLink
            target="_blank"
            href="https://www.youtube.com/channel/UCvrphOoNdgpU2i0t9-KnSvA"
          >
            <YoutubeIcon height={24} format="fill" />
          </FooterSocialMediaLink>

          <FooterSocialMediaLink
            target="_blank"
            href="https://github.com/grafito-app"
          >
            <GithubIcon height={24} format="fill" />
          </FooterSocialMediaLink>
        </FooterSectionsContainer>
      </FooterInnerContainer>
    </FooterContainer>
  );
}
