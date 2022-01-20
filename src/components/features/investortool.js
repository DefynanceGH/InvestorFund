import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Container = tw.div`relative`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto`;
const Heading = tw(SectionHeading)`w-full ml-6 text-left text-primary-100`;

const Sub = tw(Subheading)`w-full ml-6 text-left text-black text-xl`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 block`}
`;


export default () => {

  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]

  return (
    <Container>
      <div tw="ml-48">
      <Heading><p tw="text-black text-base font-thin">GROW YOUR INVESTMENT</p>Passive Income Simulator</Heading>
      <Sub>View how much your investment can increase with this asset class.</Sub>
      </div>
      <br />
      <TwoColumn>
        <Column tw="border-solid my-8 w-3/6">
          <div tw="flex">
            <Sub tw="border-solid mx-auto w-1/3 text-center rounded">Chart</Sub>
            <Sub tw="border-solid mx-auto w-1/3 text-center rounded">Chart</Sub>
          </div>
          <LineChart width={600} height={300} data={data} >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </Column>
        <Column>
          <Sub>Your initial $10,000 investment can grow to </Sub>
        </Column>
      </TwoColumn>
    </Container>
  );
};




