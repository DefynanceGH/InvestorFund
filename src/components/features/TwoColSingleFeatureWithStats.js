import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import IsaFund from "images/isac-fund.png"
import IsaPipeline from "images/isa-pipeline.png"


const Container = tw.div`relative bg-gray-200`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-8 md:mt-0`,
]);

const TextContent = tw.div`text-center lg:py-8`;

const Heading = tw(SectionHeading)`text-primary-100 text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

export default () => {


  return (
    <Container>
      <Heading tw="m-16 pt-16"><p tw="text-black text-base">Fund Information</p>Documents</Heading>
      <TwoColumn>
      <TextColumn>
          <TextContent>
            <img tw="w-2/4" src={IsaFund} />
            <Heading tw="text-black font-thin text-center text-2xl">ISA Credit Fund Fact Sheet</Heading>
          </TextContent>
        </TextColumn>
        <TextColumn>
          <TextContent>
            <img tw="w-2/4" src={IsaPipeline} />
            <Heading tw="text-black font-thin text-center text-2xl">Customer Pipeline Demand</Heading>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
