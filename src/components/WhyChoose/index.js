import { revealFromBottom, revealFromLeft, revealFromLeft2, revealFromLeft6, revealFromRight, revealFromRight2, revealFromRight4 } from "../Animation";

import retangleImg from "../../../public/images/retangle.svg";

import {
  Section,
  Container,
  HeaderText,
  Content,
  TrailContent,
  LeftContainer,
  RightContainer,
  EmptyContainer,
  Icon,
  Description,
  MobileContent,
} from "./styles";

export default function WhyChoose() {
  return (
    <Section>
      <Container>
        <HeaderText variants={revealFromBottom}>
          <h1>Por que escolher a Small Wave?</h1>
          <p>Lorem ipsum dollor siamet</p>
        </HeaderText>

        <Content>
          <TrailContent>
            <LeftContainer>
              <Icon variants={revealFromLeft}>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description variants={revealFromLeft}>
                <img src={retangleImg.src} alt="Icon" />
                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
              <hr />
            </LeftContainer>
            <EmptyContainer />

            <EmptyContainer />
            <RightContainer>
              <hr />
              <Icon variants={revealFromRight2}>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description variants={revealFromRight2}>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
            </RightContainer>

            <LeftContainer>
              <Icon variants={revealFromLeft2}>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description variants={revealFromLeft2}>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
              <hr />
            </LeftContainer>
            <EmptyContainer />

            <EmptyContainer />
            <RightContainer>
              <hr />
              <Icon variants={revealFromRight4}>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description variants={revealFromRight4}>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
            </RightContainer>
          </TrailContent>

          <MobileContent>
            <EmptyContainer />
            <RightContainer>
              <hr />
              <Description variants={revealFromRight2}>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
            </RightContainer>

            <LeftContainer>
              <Description variants={revealFromLeft2}>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
              <hr />
            </LeftContainer>
            <EmptyContainer />
            <EmptyContainer />

            <RightContainer>
              <hr />
              <Description variants={revealFromRight4}>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
            </RightContainer>

            <LeftContainer>
              <Description variants={revealFromLeft6}>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
              <hr />
            </LeftContainer>
            <EmptyContainer />
          </MobileContent>
        </Content>
      </Container>
    </Section>
  );
}
