import { Box, List, ListItem, Typography } from "@mui/material";
import styled from "styled-components";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import Button from "../shared/components/Button";
import LandingIntroAnimationImg from "../assets/images/landingIntroAnimation.png";
import PurpleQuoteImg from "../assets/images/purplequote.png";
import YellowQuoteImg from "../assets/images/yellowquote.png";
import OrangeQuoteImg from "../assets/images/orangequote.png";
import TracyCainImg from "../assets/images/tracyCain.png";
import JamesNkebeImg from "../assets/images/jamesNkebe.png";
import JohnRushImg from "../assets/images/johnRush.png";
import { DefaultLayout } from "../layouts/default/default.layout";

const Container = styled.div`
  padding-left: 80px;
  padding-right: 80px;
`;

const IntroContainer = styled(Box)`
  display: flex;
  padding-bottom: 116px;
`;

const Intro = styled.div`
  padding-top: 184px;
  width: 47%;
`;

const Header = styled(Typography)`
  font-weight: 800;
  font-size: 60px;
  line-height: 72px;
  color: #fff;
  margin-bottom: 8px;
`;

const SubHeader = styled(Typography)`
  font-weight: 500;
  font-size: 20px;
  lineheight: 30px;
  color: #fff;
`;

const IntroSubHeader = styled(Typography)`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #fff;
`;

const IntroButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 34px;
`;

const IntroButton = styled(Button)`
  color: #fff;
  margin-right: 32px;
  width: 370px;
  height: 68px;
`;

const IntroAnimation = styled.div`
  padding-top: 114px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeaturesHeading = styled(Typography)`
  font-weight: 800;
  font-size: 48px;
  line-height: 72px;
  color: "#FFF";
  text-align: center;
  align-self: center;
`;

const FeaturesButtonContainer = styled.div``;

const FeaturesButton = styled(Button)`
  margin-right: 64px;
  margin-top: 67px;
  min-width: 219px;
  height: 68px;
  color: #fff;
`;

const InverseButton = styled(Button)`
  background: transparent;
  color: #3da874;
  border: 1px solid #3da874;
  width: 241px;
  height: 68px;
`;

const FeaturesInfoContainer = styled.div`
  display: flex;
  margin-top: 168px;
`;

const FeaturesInfoSection = styled.div`
  width: 35%;
`;

const FeaturesInfoHeader = styled(Typography)`
  font-weight: 800;
  font-size: 48px;
  line-height: 72px;
`;

const StyledListItem = styled(ListItem)`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 124px;
`;

const TestimonialCardContainer = styled.div`
  display: flex;
  margin-top: 64px;
`;

const TestimonialCard = styled.div`
  width: 410px;
  height: 461px;
  margin-right: 62px;
  border-radius: 18px;
  background-color: #ffdd86;
  color: #181a1c;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 45px;
  padding-right: 45px;
  &:first-child {
    background-color: #af73bd;
  }
  &:last-child {
    background-color: #fd8042;
  }
`;

const Quote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

const Testimonial = styled(Typography)`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const GetStartedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 124px;
  padding-top: 106px;
  padding-bottom: 106px;
`;

const TestimonialAuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const GetStartedButton = styled(Button)`
  color: #fff;
  margin-top: 38px;
  width: 273px;
  height: 68px;
`;

const TestimonialAuthorPicContainer = styled.div`
  border-radius: 50%;
  width: 130px;
  height: 130px;
  overflow: hidden;
  margin-right: 32px;
`;
const FirstTestimonialAuthorPicContainer = styled(
  TestimonialAuthorPicContainer
)`
  background-color: #442d4a;
`;
const SecondTestimonialAuthorPicContainer = styled(
  TestimonialAuthorPicContainer
)`
  background-color: #ffcc4a;
`;
const ThirdTestimonialAuthorPicContainer = styled(
  TestimonialAuthorPicContainer
)`
  background-color: #ca6635;
`;

const TestimonialAuthorPic = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const TestimonialAuthorProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TestimonialAuthorName = styled(Typography)`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

const TestimonialAuthorJobTitle = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

function Landing() {
  return (
    <DefaultLayout>
      <Container>
        <IntroContainer>
          <Intro>
            <Header>
              Getting <span style={{ color: "#C280D2" }}>Animations</span> for
              your websites has never been{" "}
              <span style={{ color: "#E8BA43" }}>Easier</span> and{" "}
              <span style={{ color: "#3DA874" }}>Faster</span>{" "}
            </Header>
            <IntroSubHeader>
              Animotion provides step by step guide on how to import and embed
              animation code of your choice into your websites and apps.
            </IntroSubHeader>
            <IntroButtonContainer>
              <IntroButton>Get Started, It's Free</IntroButton>
              <IntroButton sx={{ background: "none", color: "#FFF" }}>
                <PlayCircleIcon style={{ color: "#FFCC4A" }} /> Watch Demo
              </IntroButton>
            </IntroButtonContainer>
          </Intro>
          <IntroAnimation>
            <img src={LandingIntroAnimationImg} alt="" />
          </IntroAnimation>
        </IntroContainer>
        <FeaturesContainer>
          <FeaturesHeading>Interact With Our Features</FeaturesHeading>
          <FeaturesButtonContainer>
            <FeaturesButton>Move Up</FeaturesButton>
            <FeaturesButton>Move Down</FeaturesButton>
            <FeaturesButton>Move Left</FeaturesButton>
            <FeaturesButton>Move Right</FeaturesButton>
            <FeaturesButton>Fade</FeaturesButton>
            <FeaturesButton>Bounce</FeaturesButton>
            <FeaturesButton>Rotate</FeaturesButton>
            <FeaturesButton>Grow</FeaturesButton>
            <FeaturesButton>Shrink</FeaturesButton>
            <FeaturesButton>Blink</FeaturesButton>
          </FeaturesButtonContainer>
          <FeaturesInfoContainer>
            <FeaturesInfoSection>
              <FeaturesInfoHeader>How to use the Library</FeaturesInfoHeader>
              <List sx={{ listStyleType: "disc" }}>
                <StyledListItem sx={{ display: "list-item" }}>
                  Download the Zip file
                </StyledListItem>
                <StyledListItem sx={{ display: "list-item" }}>
                  Add the file animotion.css to your CSS folder
                </StyledListItem>
                <StyledListItem sx={{ display: "list-item" }}>
                  Link it to your HTML file
                </StyledListItem>
                <StyledListItem sx={{ display: "list-item" }}>
                  Use your preffered animation by adding the class for the
                  animation as seen in the documentation section
                </StyledListItem>
              </List>
              <InverseButton>{`Learn More >`}</InverseButton>
            </FeaturesInfoSection>
            <div>video</div>
          </FeaturesInfoContainer>
        </FeaturesContainer>
        <TestimonialContainer>
          <Header>Testimonials</Header>
          <SubHeader>What our users say</SubHeader>
          <TestimonialCardContainer>
            <TestimonialCard>
              <Quote>
                <img src={PurpleQuoteImg} alt="" />
              </Quote>
              <Testimonial>
                “Animotion is really simple to incorporate to my codes. Plus,
                the site is accessible on any browser I choose to use.”
              </Testimonial>
              <TestimonialAuthorContainer>
                <FirstTestimonialAuthorPicContainer>
                  <TestimonialAuthorPic src={TracyCainImg} alt="" />
                </FirstTestimonialAuthorPicContainer>
                <TestimonialAuthorProfileContainer>
                  <TestimonialAuthorName>Tracy Cain</TestimonialAuthorName>
                  <TestimonialAuthorJobTitle>
                    Web Developer, Fast
                  </TestimonialAuthorJobTitle>
                </TestimonialAuthorProfileContainer>
              </TestimonialAuthorContainer>
            </TestimonialCard>
            <TestimonialCard>
              <Quote>
                <img src={YellowQuoteImg} alt="" />
              </Quote>
              <Testimonial>
                “Using Animotion is very easy, the documentations are self
                explanatory, the animations are super easy to document”
              </Testimonial>
              <TestimonialAuthorContainer>
                <SecondTestimonialAuthorPicContainer>
                  <TestimonialAuthorPic src={JamesNkebeImg} alt="" />
                </SecondTestimonialAuthorPicContainer>
                <TestimonialAuthorProfileContainer>
                  <TestimonialAuthorName>James Nkebe</TestimonialAuthorName>
                  <TestimonialAuthorJobTitle>
                    Web Developer, Fast
                  </TestimonialAuthorJobTitle>
                </TestimonialAuthorProfileContainer>
              </TestimonialAuthorContainer>
            </TestimonialCard>
            <TestimonialCard>
              <Quote>
                <img src={OrangeQuoteImg} alt="" />
              </Quote>
              <Testimonial>
                “Animotion is really simple to incorporate to my codes. Plus,
                the site is accessible on any browser I choose to use.”
              </Testimonial>
              <TestimonialAuthorContainer>
                <ThirdTestimonialAuthorPicContainer
                  sx={{ background: "#CA6635" }}
                >
                  <TestimonialAuthorPic src={JohnRushImg} alt="" />
                </ThirdTestimonialAuthorPicContainer>
                <TestimonialAuthorProfileContainer>
                  <TestimonialAuthorName>John F. Rush</TestimonialAuthorName>
                  <TestimonialAuthorJobTitle>
                    Web Developer, Kipp
                  </TestimonialAuthorJobTitle>
                </TestimonialAuthorProfileContainer>
              </TestimonialAuthorContainer>
            </TestimonialCard>
          </TestimonialCardContainer>
        </TestimonialContainer>
        <GetStartedContainer>
          <Header>
            Animation made <span style={{ color: "#3DA874" }}>Easier</span>
          </Header>
          <SubHeader>
            Animotion takes your animation to the next level
          </SubHeader>
          <GetStartedButton>Get Started, It's Free</GetStartedButton>
        </GetStartedContainer>
      </Container>
    </DefaultLayout>
  );
}
export default Landing;
