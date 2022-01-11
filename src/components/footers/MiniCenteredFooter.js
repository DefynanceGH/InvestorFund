import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"


const Container = tw(ContainerBase)`bg-primary-500 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-10`;

const Row = tw.div`flex items-center justify-center flex-col px-8`
const TextContent = tw.div`text-left font-thin lg:py-8 text-sm`;


export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <TextContent>Disclaimer</TextContent>
          <TextContent tw="font-thin text-sm">From time to time, Defynance will make opportunities for investments in ISAs available to investors who are qualified as “Accredited Investors” (as defined below) and who have expressed an interest in learning about such investment opportunities.  Any prospective investors will only have opportunities for investments made available to them by the ISA Refi Fund only after verification of their status and an expression of specific interest.
When investment opportunities are being offered, a Confidential Private Placement Memorandum (a “PPM”) will be furnished to approved investors on a confidential basis.  Sales of the securities may not be consummated unless prospective investors are provided with a PPM.  In particular, you should carefully read the “Risk Factors” set forth in the PPM.
The information contained in the PPM may not be provided to persons who are not directly concerned with an investor’s decision regarding the investment offered hereby.  Investors should make their own investigations and evaluations of any securities offered.  The securities, when offered, will not be registered under the Securities Act of 1933, as amended (the “Securities Act”), or any other securities laws.  They will be offered for investment pursuant to the exemption from registration provided under Section 4(a)(2) of the Securities Act and exemptions from the registration requirements of applicable state securities laws only to persons who are “Accredited Investors,” as defined in Regulation D under the Securities Act.  There will be no public market for the offered securities.
This website, and the information being provided to prospective investors at this time, is not an offer to sell or a solicitation of an offer to buy any securities that may be offered in the future by Defynance, nor shall any such securities be offered or sold to any person in any jurisdiction in which such offer, solicitation, purchase, or sale would be unlawful under the securities laws of such jurisdiction.
ANY SECURITIES OFFERED BY DEFYNANCE WILL NOT HAVE BEEN RECOMMENDED BY THE U.S. SECURITIES AND EXCHANGE COMMISSION OR ANY STATE SECURITIES COMMISSION OR REGULATORY AUTHORITY.
ANY SECURITIES OFFERED BY DEFYNANCE WILL BE SUBJECT TO RESTRICTIONS ON TRANSFERABILITY AND RESALE, AND MAY NOT BE TRANSFERRED OR RESOLD EXCEPT AS PERMITTED UNDER THE SECURITIES ACT AND APPLICABLE STATE SECURITIES LAWS, PURSUANT TO REGISTRATION OR AN EXEMPTION THEREFROM.  INVESTORS SHOULD BE AWARE THAT THEY MAY BE REQUIRED TO BEAR THE FINANCIAL RISKS OF THEIR INVESTMENT IN THE SECURITIES FOR AN INDEFINITE TIME.
CERTAIN INFORMATION CONTAINED IN THIS WEBSITE AND IN THE PPM TO BE DELIVERED IN THE FUTURE CONSTITUTES AND WILL CONSTITUTE “FORWARD-LOOKING STATEMENTS,” WHICH CAN BE IDENTIFIED BY THE USE OF FORWARD-LOOKING TERMINOLOGY SUCH AS “MAY,” “WILL,” “SHOULD,” “EXPECT,” “ANTICIPATE,” “ESTIMATE,” “INTEND,” “CONTINUE” OR “BELIEVE” TO THE NEGATIVES THEREOF OR OTHER VARIATIONS THEREON OR COMPARABLE TERMINOLOGY.  DUE TO VARIOUS RISKS AND UNCERTAINTIES, ACTUAL EVENTS OR RESULTS FROM THE ACTUAL PERFORMANCE OF THE SECURITIES MAY DIFFER MATERIALLY FROM THOSE REFLECTED OR CONTEMPLATED IN SUCH FORWARD-LOOKING STATEMENTS.</TextContent>
        </Row>
      </Content>
    </Container>
  );
};
