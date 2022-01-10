import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import  { NavLink, NavLinks, PrimaryLink} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";


const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover bg-green-100`}
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 items-center `;
const LeftColumn = tw.div`flex flex-row items-center lg:block`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-xl xl:text-4xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Notification = tw.span`inline-block my-2 w-1/4 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-base`;

const PrimaryAction = tw(NavLinks)`my-6
px-8 py-3 rounded text-gray-100 bg-primary-600
hocus:bg-primary-500 hocus:text-gray-200 focus:shadow-outline
border-b-0 cursor-pointer
`;

export default () => {

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span>Introducing the ISA Credit Fund</span>
              <br/>
            </Heading>
            <Notification>An innovative solution to tackling the student debt crisis.</Notification>
            <br />
            <Notification>You can now invest in the earning power of the American Workforce</Notification>
            <br />
            <PrimaryAction>Get an ISA Quote</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
