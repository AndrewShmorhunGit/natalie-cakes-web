import styled from "@emotion/styled/macro";
import { colorSys, flexCenter, appShadows, mq } from "styles/imports";
import { css } from "@emotion/css";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { paddingTopBottom, wideContainer } from "styles/general";
import { IHeroSelectors, ISelectorParams } from "interfaces/IHero";

// STYLED GENERAL CUSTOM COMPONENTS

// BUTTONS
const buttonVariants: any = {
  primary: {
    width: "22.4rem",
    height: "6rem",
    border: `0.3rem solid ${colorSys.main_primary_dark}`,
    fontSize: "2.4rem",
    fontWeight: "600",
    color: colorSys.main_primary_dark,
    "&:hover": {
      background: colorSys.background_second,
    },
    [mq.medium]: { width: "20rem", height: "5.2rem", fontSize: "2rem" },
    [mq.small]: { width: "16rem", height: "4rem", fontSize: "1.6rem" },
  },
  secondary: {
    width: "12rem",
    height: "4.8rem",
    fontSize: "2rem",
    backgroundColor: colorSys.main_primary,
    color: colorSys.white,
    border: `0.2rem solid ${colorSys.white}`,
    [mq.medium]: { width: "10rem", height: "4rem", fontSize: "1.6rem" },
    [mq.small]: { width: "8rem", height: "3.2rem", fontSize: "1.2rem" },
  },
  language: {
    width: "3.2rem",
    height: "3.2rem",
    fontSize: "1.6rem",
    border: `0.2rem solid ${colorSys.main_primary_dark}`,
    textTransform: "none",
    borderRadius: "0.4rem",
    [mq.medium]: { width: "2.8rem", height: "2.8rem", fontSize: "1.2rem" },
    [mq.small]: { width: "2.4rem", height: "2.4rem", fontSize: "1rem" },
  },
};

const Button = styled.button(
  {
    borderRadius: "1.2rem",
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "400",
    transition: "all 0.5s ease-out",
    textTransform: "capitalize",
    "&:hover": {
      transform: "translateY(-0.1rem)",
      boxShadow: appShadows.button,
    },
    "&:active": {
      transform: "translateY(-0.1rem)",
      boxShadow: appShadows.buttonActive,
    },
  },
  ({ variant = "secondary" }: { variant: string }) => buttonVariants[variant]
);

// HEADERS

const MainHeader = styled.h1({
  fontSize: "6.8rem",
  ...flexCenter,
  fontWeight: 400,
});

// STYLED APP COMPONENTS

// NAV
const NavigationSection = styled.main({
  ...wideContainer,
  position: "fixed",
  top: 0,
  zIndex: 99,
  width: "100%",
  background: "linear-gradient(270deg, #FF8E8E 0%, #995555 100%)",
  backgroundColor:
    "radial-gradient(562% 18036% at 115.87% 50%, #FF8E8E 0%, #995555 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
});

// HERO
const HeroSection = styled.main({
  // backgroundImage: `url("content/images/hero/hero-background-img.jpg")`,
  backgroundImage: `url("https://media.istockphoto.com/id/700712598/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BC%D0%B8%D0%BB%D0%BE%D1%97-%D0%B4%D0%B8%D1%82%D0%B8%D0%BD%D0%B8.jpg?s=612x612&w=0&k=20&c=OkG9eyPfm3xVB0KHWiuLnQl2P4lUIOBRHvehsHR9BI4=")`,
  backgroundRepeat: "none",
  backgroundSize: "cover",
});

// CONTAINERS

const RelativeContainer = styled.div({
  position: "relative",
});

const AbsoluteCenterContainer = styled.div({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

const FlexRowContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const FlexColumnContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});
const FlexCenterContainer = styled.div({
  ...flexCenter,
});

const BackDropFilterContainer = styled.div({
  ...paddingTopBottom(12, 18),
  height: "100%",
  background: "rgb(0,0,0,0.3)",
  backdropFilter: "blur(1.6rem)",
});

// COMPONENTS

function DecoContainer({
  width,
  height,
  color,
  props,
}: {
  width: number;
  height: number;
  color: string;
  props?: React.CSSProperties | undefined;
}) {
  return (
    <FlexCenterContainer
      className={css({
        width: `${width}rem`,
        height: `${height}rem`,
        background: `${color}`,
        ...props,
      })}
    ></FlexCenterContainer>
  );
}

function HeroSelectorDecoContainer({
  selector,
  selectorParams,
}: {
  selector: IHeroSelectors;
  selectorParams: ISelectorParams;
}) {
  {
    return (
      <RelativeContainer>
        <AbsoluteCenterContainer>{selector.icon}</AbsoluteCenterContainer>
        <DecoContainer
          width={selectorParams.width}
          height={selectorParams.width}
          color={selectorParams.color}
          props={{
            ...selectorParams.decoProps,
          }}
        />
        <DecoContainer
          width={selectorParams.width - selectorParams.step}
          height={selectorParams.width - selectorParams.step}
          color={selectorParams.ringColor}
          props={{
            ...selectorParams.decoProps,
          }}
        />
        <DecoContainer
          width={selectorParams.width - 2 * selectorParams.step}
          height={selectorParams.width - 2 * selectorParams.step}
          color={selectorParams.color}
          props={{
            ...selectorParams.decoProps,
          }}
        />

        <p
          className={css({
            textTransform: "capitalize",
            transform: "translateY(11.2rem)",
            fontSize: `${selectorParams.font}`,
          })}
        >
          {selector.name}
        </p>
      </RelativeContainer>
    );
  }
}

function MainLogoText({
  textColor = colorSys.text_dark,
}: {
  textColor: string;
}): EmotionJSX.Element {
  return (
    <FlexCenterContainer
      className={css({
        transition: "all 0.5s ease",
        color: textColor,
        flexDirection: "column",
        gap: "0.8rem",
        lineHeight: "1",
        h3: {
          fontWeight: "400",
          textAlign: "center",
          fontSize: "3.2rem",
        },
        h4: { textAlign: "center", fontSize: "1.8rem", fontWeight: "300" },
        [mq.medium]: {
          // gap: "0.8rem",
          h3: {
            fontSize: "2.8rem",
          },
          h4: {
            fontSize: "1.6rem",
          },
        },
        [mq.small]: {
          // gap: "0.8rem",
          h3: {
            fontSize: "2.4rem",
          },
          h4: {
            fontSize: "1.4rem",
          },
        },
      })}
    >
      <h3>Natalie Cakes</h3>
      <h4>Homemade Baking</h4>
    </FlexCenterContainer>
  );
}

export {
  Button,
  MainHeader,
  NavigationSection,
  HeroSection,
  RelativeContainer,
  AbsoluteCenterContainer,
  FlexRowContainer,
  FlexColumnContainer,
  FlexCenterContainer,
  BackDropFilterContainer,
  MainLogoText,
  DecoContainer,
  HeroSelectorDecoContainer,
};