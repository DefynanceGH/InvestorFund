import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading } from "components/misc/Headings.js";



const Container = tw.div`relative bg-primary-600`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`my-0 pt-12 w-full text-center text-white`;

const AltHeading = tw(SectionHeading)`my-0 pt-12 w-full text-center text-white`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 flex`}
`;


export default () => {


  return (
    <Container>
        <Heading><p tw="text-white text-base font-thin">Estimated growth</p>Projections</Heading>
      <ThreeColumnContainer>
          <Column >
            <span tw="mx-auto">
                <Heading>$2B</Heading>
                <Subheading tw="font-thin text-white text-base">Project Social Impact Potential</Subheading>
            </span>
          </Column>
          <Column >
            <span tw="mx-auto">
                <Heading>$11M</Heading>
                <Subheading tw="font-thin text-white text-base">Pipeline Size</Subheading>
            </span>
          </Column>
          <Column >
            <span tw="mx-auto">
                <Heading>100%</Heading>
                <Subheading tw="font-thin text-white text-base">Payment History</Subheading>
            </span>
          </Column>
      </ThreeColumnContainer>
    </Container>
  );
};