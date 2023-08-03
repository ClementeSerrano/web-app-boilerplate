import SectionContainer from '../../../../common/components/SectionContainer/SectionContainer';

import {
  HowItWorksSectionTitle,
  HowItWorksCardsContainer,
  HowItWorksCard,
  HowItWorksIconContainer,
  HowItWorksTitle,
  HowItWorksSubtitle,
  HowItWorksParagraph,
} from './HowItWorksSection.styles';

export default function HowItWorksSection() {
  return (
    <SectionContainer withSeparator>
      <HowItWorksSectionTitle variant="title3">
        How it works.
      </HowItWorksSectionTitle>

      <HowItWorksCardsContainer>
        <HowItWorksCard>
          <HowItWorksIconContainer>
            <HowItWorksTitle variant="title4">1.</HowItWorksTitle>
          </HowItWorksIconContainer>

          <HowItWorksSubtitle variant="title6">
            Access vetted projects
          </HowItWorksSubtitle>

          <HowItWorksParagraph variant="paragraph1" color="level3">
            You can access the list of projects currently available for funding
            and view all the relevant details.
          </HowItWorksParagraph>
        </HowItWorksCard>

        <HowItWorksCard>
          <HowItWorksIconContainer>
            <HowItWorksTitle variant="title4">2.</HowItWorksTitle>
          </HowItWorksIconContainer>

          <HowItWorksSubtitle variant="title6">
            Choose a project to invest in
          </HowItWorksSubtitle>

          <HowItWorksParagraph variant="paragraph1" color="level3">
            Choose a project to invest in that matches your climate impact and
            financial expectations.
          </HowItWorksParagraph>
        </HowItWorksCard>

        <HowItWorksCard>
          <HowItWorksIconContainer>
            <HowItWorksTitle variant="title4">3.</HowItWorksTitle>
          </HowItWorksIconContainer>

          <HowItWorksSubtitle variant="title6">
            Climeinvest pools the funds
          </HowItWorksSubtitle>

          <HowItWorksParagraph variant="paragraph1" color="level3">
            We pool all the investor funds together and invest in the project
            through an SPV structure. Each investor receives their shares in the
            project.
          </HowItWorksParagraph>
        </HowItWorksCard>

        <HowItWorksCard>
          <HowItWorksIconContainer>
            <HowItWorksTitle variant="title4">4.</HowItWorksTitle>
          </HowItWorksIconContainer>

          <HowItWorksSubtitle variant="title6">
            Ongoing monitoring
          </HowItWorksSubtitle>

          <HowItWorksParagraph variant="paragraph1" color="level3">
            Once invested, you can monitor the status of the project and see the
            value of your portfolio.
          </HowItWorksParagraph>
        </HowItWorksCard>

        <HowItWorksCard>
          <HowItWorksIconContainer>
            <HowItWorksTitle variant="title4">5.</HowItWorksTitle>
          </HowItWorksIconContainer>

          <HowItWorksSubtitle variant="title6">
            Get a return on your investment
          </HowItWorksSubtitle>

          <HowItWorksParagraph variant="paragraph1" color="level3">
            Trade your shares with other investors on our marketplace or wait
            till we sell the entire stake in the project.
          </HowItWorksParagraph>
        </HowItWorksCard>
      </HowItWorksCardsContainer>
    </SectionContainer>
  );
}
