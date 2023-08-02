import { useRef } from 'react';
import Typography from '../Typography/Typography';
import { useDevice } from '../../contexts/DeviceContext/DeviceContext.hooks';
import { useLayout } from '../../contexts/LayoutContext/LayoutContext.hooks';
import useElementSize from '../../hooks/useElementSize';
import InstagramIcon from '../../assets/icons/InstagramIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import {
  FooterContainer,
  FooterInnerContainer,
  FooterCopyrightContainer,
  FooterSocialMediaLink,
  FooterSectionsContainer,
  // FooterLinksContainer,
  // FooterLink,
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
            © {copyrightYear} ClimeInvest {isPhone && '- Designed Worldwide.'}
          </Typography>
        </FooterCopyrightContainer>

        {/* TODO: Uncomment when content is available.
        {!isPhone && (
          <FooterLinksContainer>
            <FooterLink to="about">About</FooterLink>
            <FooterLink to="changelog">Changelog</FooterLink>
            <FooterLink to="contact">Contact</FooterLink>
          </FooterLinksContainer>
        )} */}

        <FooterSectionsContainer>
          <FooterSocialMediaLink
            target="_blank"
            href="https://www.instagram.com/climeinvest.official"
          >
            <InstagramIcon height={24} format="fill" />
          </FooterSocialMediaLink>

          <FooterSocialMediaLink
            target="_blank"
            href="https://www.linkedin.com/company/climeinvest"
          >
            <LinkedInIcon height={24} format="fill" />
          </FooterSocialMediaLink>
        </FooterSectionsContainer>
      </FooterInnerContainer>
    </FooterContainer>
  );
}
