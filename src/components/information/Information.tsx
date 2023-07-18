// Components
import {
  Container,
  FlexCenterContainer,
  InfoContainer,
  InfoDecoLine,
  InfoHeader,
  InfoParagraph,
  InformationSection,
  MainHeader,
  DesignLogo,
  IngredientsLogo,
  OrderLogo,
  InfoBlock,
  InfoImportantTitle,
} from "components";
// Styles
import {
  css,
  mq,
  palette,
  container,
  createGrid,
  paddingTopBottom,
} from "styles";
// Interfaces
import { IAppBox, IInfoBlock } from "interfaces";

export function Information({ appBox }: { appBox: IAppBox }) {
  const { innerContent: content, setMedia, isMedia } = appBox;

  const logoSettings = setMedia(128, 100, 84, 48);

  const infContentData: IInfoBlock[] = [
    {
      title: content.ingredients,
      text: content.ingredientsText,
      logo: IngredientsLogo({ width: logoSettings, height: logoSettings }),
    },
    {
      title: content.design,
      text: content.designText,
      logo: DesignLogo({ width: logoSettings, height: logoSettings }),
    },
    {
      title: content.order,
      text: content.orderText,
      logo: OrderLogo({ width: logoSettings, height: logoSettings }),
    },
  ];

  return (
    <InformationSection>
      <Container
        className={css({
          justifyContent: "start",
          alignContent: "center",
        })}
      >
        <MainHeader
          className={css({
            ...container,
            color: palette.white,
            textTransform: "capitalize",
          })}
        >
          {content.infoHeader}
        </MainHeader>
      </Container>
      <Container
        className={css({
          background:
            "linear-gradient(180deg, rgb(57,36,28,0.7) 0%, #FFF4F4 100%)",
          ...paddingTopBottom(8),
          borderTop: `0.4rem solid ${palette.main_primary_dark}`,
        })}
      >
        <Container
          className={css({
            ...container,
            display: "flex",
            flexDirection: "column",
            rowGap: isMedia.mini ? "8.4rem" : "12.4rem",
            [mq.mini]: { padding: "1.2rem 1.6rem" },
          })}
        >
          {infContentData.map((data, index) => {
            return (
              <InfoBlock
                key={data.title + index}
                infContentData={data}
                isMedia={isMedia}
                setMedia={setMedia}
                index={index}
              />
            );
          })}
          <FlexCenterContainer>
            <InfoContainer
              className={css(
                isMedia.mini
                  ? { display: "flex", flexDirection: "column" }
                  : {
                      gridColumn: "1/-1",
                      gridRow: "4",
                      ...createGrid(`1fr ${setMedia(3, 4, 5, 0)}fr`, 2),
                      marginLeft: "2rem",
                    }
              )}
            >
              <Container
                className={css({
                  ...createGrid(1, 2),
                })}
              >
                <Container>
                  <InfoHeader className={css({ paddingTop: "4rem" })}>
                    {content.important}
                  </InfoHeader>
                  <InfoDecoLine />
                </Container>
                <InfoImportantTitle
                  isMedia={isMedia}
                  setMedia={setMedia}
                  title={content.importantText.h1}
                />
              </Container>
              <Container>
                <FlexCenterContainer
                  className={css({
                    flexDirection: "column",
                    gap: "3.2rem",
                    padding: `${isMedia.mini ? "1.6" : "4.4"}rem`,
                  })}
                >
                  <InfoParagraph>{content.importantText.p1}</InfoParagraph>
                  <InfoParagraph>{content.importantText.p2}</InfoParagraph>
                </FlexCenterContainer>
              </Container>
            </InfoContainer>
          </FlexCenterContainer>
        </Container>
      </Container>
    </InformationSection>
  );
}
