import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";
import defaultCardImage from "../../images/shield-icon.svg";
import MoneyIcon from "../../images/money-bill-wave-alt-solid.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Container = tw.div`relative bg-gray-200`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-start md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full ml-6 text-left text-primary-100`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs px-6 py-10 border-2 bg-white rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-2 flex-shrink-0 relative`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-2 text-center`}
  }

  .title {
    ${tw`font-bold text-xl leading-none text-primary-600`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const PrimaryAction = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw` text-white no-underline rounded bg-primary-500 mx-auto inline-block mb-10 text-sm font-semibold hocus:bg-white hocus:text-primary-600 focus:shadow-outline
  `}
`

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: MoneyIcon,
      title: "Recession Hedging",
      description: "Degree holding workers have been able to maintain income stability during elevated recession."
    },
    { imageSrc: MoneyIcon, 
      title: "Proprietary Pricing and Risk Algorithm",
      description: "Our unique underwriting conrols low default risk for investors."
    },
    { imageSrc: MoneyIcon,
      title: "Social Impact",
      description: "Contribute to taking down the student loan crisis in the United States."
    },
    {
      imageSrc: MoneyIcon,
      title: "Portfolio Diversification",
      description: "You’re investing in a pool of ISAs, not just one. This minimized the overall risk of your portfolio."
    },
    { imageSrc: MoneyIcon, 
      title: "Higher Passive Returns vs Fixed Income",
      description: "Quarterly passive income at a 7–10% forecasted return with low volatility."
    },
    { imageSrc: MoneyIcon,
      title: "Liquidity Feature",
      description: "Reinvest in the next credit fund or exit once the current one ends."
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading><p tw="text-black text-base">Live life on your terms</p>Features and Benefits</Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <div tw="flex">
        <PrimaryAction target="_blank" href="http://portal.defynance.com/" >Get an ISA Quote</PrimaryAction>
      </div>
    </Container>
  );
};
