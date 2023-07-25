import styled from 'styled-components';

import Card from '../../../../common/components/Card/Card';

export const TestimonialsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: hsl(0deg 0% 3%);
  padding: 72px;

  @media (max-width: 600px) {
    padding: 40px;
  }
`;

export const TestimonialsCardsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TestimonialsCardsSubContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 16px;
  }

  @media (max-width: 600px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`;

export const TestimonialCardBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 16px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export const TestimonialCard = styled(Card)`
  width: 304px;
  flex-direction: row;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    width: fit-content;
  }
`;

export const TestimonialsLogosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TestimonialAvatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  font-size: 24px;

  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;
