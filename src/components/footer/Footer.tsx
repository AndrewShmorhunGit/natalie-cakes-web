import { css } from "@emotion/css";
import { MainLogo } from "components/imports";
import {
  Button,
  Container,
  DecoContainer,
  FlexCenterContainer,
  FlexColumnContainer,
  FooterSection,
  FooterHeader,
  FooterParagraph,
  MainLogoText,
  IconAndTextFooterContacts,
} from "components/lib/StyledComponents";
import {
  EnvelopLogo,
  InstagramLogo,
  LocationLogo,
  PhoneLogo,
} from "components/logos/Logos";
import { IAppBox } from "interfaces/IApp";
import { IFooterContacts } from "interfaces/IFooter";
import { ILogos } from "interfaces/ILogos";
import { colorSys } from "styles/colors";
import {
  container,
  createGrid,
  paddingLeftRight,
  paddingTopBottom,
} from "styles/general";
// import { mq } from "styles/media-queries";

export function Footer({ appBox: contentBox }: { appBox: IAppBox }) {
  const content = contentBox.innerContent;
  const mediaDeps = contentBox.setParamsFromMedia;
  const logoPropsContacts: ILogos = {
    width: "32",
    height: "32",
    fill: colorSys.main_primary_dark,
  };

  const footerContacts: IFooterContacts[] = [
    {
      name: `${content.footerContacts.address}`,
      icon: LocationLogo(logoPropsContacts),
    },
    {
      name: `${content.footerContacts.phone}`,
      icon: PhoneLogo(logoPropsContacts),
    },
    {
      name: `${content.footerContacts.email}`,
      icon: EnvelopLogo(logoPropsContacts),
    },
  ];

  return (
    <FooterSection>
      <Container
        className={css({
          ...container,
          color: colorSys.text_dark,
        })}
      >
        <FlexCenterContainer className={css({ ...paddingTopBottom(2, 5.2) })}>
          <FlexCenterContainer
            className={css({
              ...paddingLeftRight(0, 1.6),
            })}
          >
            <MainLogo width="6rem" height="6rem" fill={colorSys.text_dark} />
          </FlexCenterContainer>
          <MainLogoText textColor={colorSys.text_dark} />
        </FlexCenterContainer>
        <Container
          className={css({
            // ...createGrid("1fr 1.2fr 1fr", 1),
            ...createGrid(
              mediaDeps("1fr 2fr 1fr", "1fr 1.5fr 1fr", "1fr 1.2fr 1fr", "1fr"),
              mediaDeps(1, 1, 1, "repeat(3, auto)")
            ),
            rowGap: "4rem",

            // ...paddingTopBottom(0, 6),
            placeItems: "center",
          })}
        >
          <FlexColumnContainer
            className={css({
              gridColumn: "1/2",
              gridRow: mediaDeps("1"),
              gap: mediaDeps("2rem", "1.6rem", "1.2rem"),
            })}
          >
            <FooterHeader>{content.footerOther.contacts}</FooterHeader>
            {footerContacts.map(({ name, icon }) => {
              return (
                <Container
                  className={css({
                    cursor: "pointer",
                  })}
                  key={name}
                >
                  <IconAndTextFooterContacts icon={icon} text={name} />
                </Container>
              );
            })}
          </FlexColumnContainer>
          <FlexColumnContainer
            className={css({
              gridColumn: mediaDeps("2/3", "2/3", "2/3", "1"),
              gridRow: mediaDeps("1", "1", "1", "2"),
              gap: mediaDeps("2rem", "1.6rem", "1.2rem"),
            })}
          >
            <FooterHeader>{content.footerOther.question}</FooterHeader>
            <FooterParagraph className={css({ textAlign: "center" })}>
              {content.footerOther.callBack}
            </FooterParagraph>
            <FlexCenterContainer>
              <Button variant="primary">Take a call</Button>
            </FlexCenterContainer>
          </FlexColumnContainer>
          <FlexColumnContainer
            className={css({
              gridColumn: mediaDeps("3/-1", "3/-1", "3/-1", "1"),
              gridRow: mediaDeps("1", "1", "1", "3"),
              gap: mediaDeps("2rem", "1.6rem", "1.2rem"),
            })}
          >
            <FooterHeader>{content.footerOther.follow}</FooterHeader>
            <FlexCenterContainer className={css({ cursor: "pointer" })}>
              <InstagramLogo
                height={"36 "}
                width={"36"}
                fill={colorSys.main_primary_dark}
              />
            </FlexCenterContainer>
          </FlexColumnContainer>
        </Container>
        <FlexColumnContainer
          className={css({ ...paddingTopBottom(mediaDeps(8, 6, 4), 2) })}
        >
          <FooterHeader>{content.footerOther.menu}</FooterHeader>
          <FlexCenterContainer className={css({ ...paddingTopBottom(1, 0) })}>
            <DecoContainer
              width={30}
              height={0.2}
              color={colorSys.main_primary_dark}
            />
          </FlexCenterContainer>
          <FlexCenterContainer
            className={css({ ...paddingTopBottom(2), gap: "0rem" })}
          >
            {content.footerOther.cart.map((position) => {
              return (
                <Container
                  key={position}
                  className={css({
                    textTransform: "capitalize",
                    color: colorSys.main_primary_dark,
                    cursor: "pointer",
                    "&:hover": {
                      color: colorSys.text_dark,
                    },
                  })}
                >
                  <FooterParagraph>{position}</FooterParagraph>
                </Container>
              );
            })}
          </FlexCenterContainer>
        </FlexColumnContainer>
        <p
          className={css({
            textAlign: "center",
            ...paddingTopBottom(mediaDeps(8, 6, 4), 1.2),
          })}
        >
          &copy; {content.footerOther.rights}
        </p>
      </Container>
    </FooterSection>
  );
}
