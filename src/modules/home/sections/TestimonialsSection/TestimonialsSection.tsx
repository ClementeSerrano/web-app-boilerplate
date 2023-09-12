import User1Avatar from '../../../../common/assets/images/users/user1-avatar.jpg';

import {
  TestimonialsTitle,
  TestimonialsCardsContainer,
  TestimonialsCardsSubContainer,
  TestimonialCardBodyContainer,
  TestimonialCard,
  TestimonialAvatar,
} from './TestimonialsSection.styles';
import { useDevice } from '../../../../contexts/DeviceContext/DeviceContext.hooks';
import Typography from '../../../../components/Typography/Typography';
import { useTheme } from 'styled-components';
import SectionContainer from '../../../../components/SectionContainer/SectionContainer';

export default function TestimonialsSection() {
  const { isPhone } = useDevice();
  const theme = useTheme();

  return (
    <SectionContainer withSeparator>
      <TestimonialsTitle variant="title3">Testimonials.</TestimonialsTitle>

      <TestimonialsCardsContainer>
        <TestimonialsCardsSubContainer>
          <TestimonialCard
            style={{
              backgroundColor: '#1C1D1F',
              flexDirection: isPhone ? 'column' : 'row',
              alignItems: isPhone ? 'center' : 'unset',
              padding: 32,
            }}
          >
            <TestimonialAvatar src={User1Avatar} />

            <TestimonialCardBodyContainer>
              <Typography as="h1" variant="paragraph2">
                User 1
              </Typography>

              <Typography
                as="h1"
                variant="paragraph2"
                style={{
                  fontSize: theme.typography.fontSizes.sm,
                  color: theme.palette.primary.main,
                  marginBottom: 8,
                }}
              >
                Investor
              </Typography>

              <Typography as="p" variant="paragraph3">
                Grafito is a super good solution for entrepreneurs looking to
                quickly and efficiently mount their businesses online and
                connect with other creators. The team behind it's super cool and
                attentive to solve all kinds of problems. Also very open to
                constantly improving their service. 100% recommended.
              </Typography>
            </TestimonialCardBodyContainer>
          </TestimonialCard>

          <TestimonialCard
            style={{
              backgroundColor: '#1C1D1F',
              flexDirection: isPhone ? 'column' : 'row',
              alignItems: isPhone ? 'center' : 'unset',
              padding: 32,
            }}
          >
            <TestimonialAvatar src={User1Avatar} />

            <TestimonialCardBodyContainer>
              <Typography as="h1" variant="paragraph2">
                User 1
              </Typography>

              <Typography
                as="h1"
                variant="paragraph2"
                style={{
                  fontSize: theme.typography.fontSizes.sm,
                  color: theme.palette.primary.main,
                  marginBottom: 8,
                }}
              >
                Investor
              </Typography>

              <Typography as="p" variant="paragraph3">
                Grafito is a super good solution for entrepreneurs looking to
                quickly and efficiently mount their businesses online and
                connect with other creators. The team behind it's super cool and
                attentive to solve all kinds of problems. Also very open to
                constantly improving their service. 100% recommended.
              </Typography>
            </TestimonialCardBodyContainer>
          </TestimonialCard>

          <TestimonialCard
            style={{
              backgroundColor: '#1C1D1F',
              flexDirection: isPhone ? 'column' : 'row',
              alignItems: isPhone ? 'center' : 'unset',
              padding: 32,
            }}
          >
            <TestimonialAvatar src={User1Avatar} />

            <TestimonialCardBodyContainer>
              <Typography as="h1" variant="paragraph2">
                User 1
              </Typography>

              <Typography
                as="h1"
                variant="paragraph2"
                style={{
                  fontSize: theme.typography.fontSizes.sm,
                  color: theme.palette.primary.main,
                  marginBottom: 8,
                }}
              >
                Investor
              </Typography>

              <Typography as="p" variant="paragraph3">
                Grafito is a super good solution for entrepreneurs looking to
                quickly and efficiently mount their businesses online and
                connect with other creators. The team behind it's super cool and
                attentive to solve all kinds of problems. Also very open to
                constantly improving their service. 100% recommended.
              </Typography>
            </TestimonialCardBodyContainer>
          </TestimonialCard>
        </TestimonialsCardsSubContainer>

        <TestimonialsCardsSubContainer>
          <TestimonialCard
            style={{
              backgroundColor: '#1C1D1F',
              flexDirection: isPhone ? 'column' : 'row',
              alignItems: isPhone ? 'center' : 'unset',
              padding: 32,
            }}
          >
            <TestimonialAvatar src={User1Avatar} />

            <TestimonialCardBodyContainer>
              <Typography as="h1" variant="paragraph2">
                User 1
              </Typography>

              <Typography
                as="h1"
                variant="paragraph2"
                style={{
                  fontSize: theme.typography.fontSizes.sm,
                  color: theme.palette.primary.main,
                  marginBottom: 8,
                }}
              >
                Investor
              </Typography>

              <Typography as="p" variant="paragraph3">
                Grafito is a super good solution for entrepreneurs looking to
                quickly and efficiently mount their businesses online and
                connect with other creators. The team behind it's super cool and
                attentive to solve all kinds of problems. Also very open to
                constantly improving their service. 100% recommended.
              </Typography>
            </TestimonialCardBodyContainer>
          </TestimonialCard>
          <TestimonialCard
            style={{
              backgroundColor: '#1C1D1F',
              flexDirection: isPhone ? 'column' : 'row',
              alignItems: isPhone ? 'center' : 'unset',
              padding: 32,
            }}
          >
            <TestimonialAvatar src={User1Avatar} />

            <TestimonialCardBodyContainer>
              <Typography as="h1" variant="paragraph2">
                User 1
              </Typography>

              <Typography
                as="h1"
                variant="paragraph2"
                style={{
                  fontSize: theme.typography.fontSizes.sm,
                  color: theme.palette.primary.main,
                  marginBottom: 8,
                }}
              >
                Investor
              </Typography>

              <Typography as="p" variant="paragraph3">
                Grafito is a super good solution for entrepreneurs looking to
                quickly and efficiently mount their businesses online and
                connect with other creators. The team behind it's super cool and
                attentive to solve all kinds of problems. Also very open to
                constantly improving their service. 100% recommended.
              </Typography>
            </TestimonialCardBodyContainer>
          </TestimonialCard>
          <TestimonialCard
            style={{
              backgroundColor: '#1C1D1F',
              flexDirection: isPhone ? 'column' : 'row',
              alignItems: isPhone ? 'center' : 'unset',
              padding: 32,
            }}
          >
            <TestimonialAvatar src={User1Avatar} />

            <TestimonialCardBodyContainer>
              <Typography as="h1" variant="paragraph2">
                User 1
              </Typography>

              <Typography
                as="h1"
                variant="paragraph2"
                style={{
                  fontSize: theme.typography.fontSizes.sm,
                  color: theme.palette.primary.main,
                  marginBottom: 8,
                }}
              >
                Investor
              </Typography>

              <Typography as="p" variant="paragraph3">
                Grafito is a super good solution for entrepreneurs looking to
                quickly and efficiently mount their businesses online and
                connect with other creators. The team behind it's super cool and
                attentive to solve all kinds of problems. Also very open to
                constantly improving their service. 100% recommended.
              </Typography>
            </TestimonialCardBodyContainer>
          </TestimonialCard>
        </TestimonialsCardsSubContainer>
      </TestimonialsCardsContainer>
    </SectionContainer>
  );
}
