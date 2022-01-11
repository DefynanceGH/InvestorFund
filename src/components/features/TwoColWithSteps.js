import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


const Container = tw.div`relative bg-green-100`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);



const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`text-primary-100 mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const PrimaryAction = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw` cursor-pointer text-white no-underline rounded bg-primary-600 mx-auto inline-block mb-10 text-sm font-semibold hocus:bg-primary-500 hocus:text-white focus:shadow-outline
  `}
`

export default ({
  subheading = "Fund Information",
  heading = "Invest Now",
  textOnLeft = true,
  steps = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Register",
      description: "Create an account with us using Google or Facebook."
    },
    {
      heading: "Download",
      description: "Browse and Download the template that you like from the marketplace."
    },
    {
      heading: "Run",
      description: "Follow the instructions to setup and customize the template to your needs."
    }
  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container>
      <TwoColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <PrimaryAction>Request Information</PrimaryAction>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
