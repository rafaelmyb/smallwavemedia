import { revealFromBottom } from "../Animation";

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
              <Icon>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description>
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
              <Icon>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
            </RightContainer>

            <LeftContainer>
              <Icon>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description>
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
              <Icon>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description>
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
              <Icon>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
            </RightContainer>

            <LeftContainer>
              <Icon>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description>
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
              <Icon>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description>
                <img src={retangleImg.src} alt="Icon" />

                <strong>Title Text Lorem Ipsum</strong>
                <p>
                  Lorem Impsum dollor siamet dollor lorem siamet ipsum dollor{" "}
                </p>
              </Description>
            </RightContainer>

            <LeftContainer>
              <Icon>
                <img src={retangleImg.src} alt="Icon" />
              </Icon>
              <Description>
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
