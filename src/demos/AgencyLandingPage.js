import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import FAQ from "components/faqs/SingleCol";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import Header, {  NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light.js";
import styled from "styled-components";
import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats.js";
import TwoColWithSteps from "components/features/TwoColWithSteps.js";
import SimpleSubscribeNewsletter from "components/forms/SimpleSubscribeNewsletter.js";
import SimpleFiveColumn from "components/footers/SimpleFiveColumn.js";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter.js";

const StyledHeader = styled(Header)`
  ${tw`pb-20 max-w-none `}
  ${DesktopNavLinks} {
    ${tw`flex justify-center text-primary-500 hover:border-gray-300 hover:text-gray-300`}
  }
  ${LogoLink} {
    ${tw`w-10 h-10 my-2`}
  }
  ${PrimaryLink} {
    ${tw`bg-primary-400 hover:bg-primary-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const navLinks = [
  <NavLinks key={1}>
  </NavLinks>
];

export default () => (
  <AnimationRevealPage>
    <StyledHeader links={navLinks}/>
    <Hero />
    <Features />
    <MainFeature2 />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
    />
    <TwoColSingleFeatureWithStats />
    <TwoColWithSteps />
    <SimpleSubscribeNewsletter />
    <MiniCenteredFooter />
  </AnimationRevealPage>
);
